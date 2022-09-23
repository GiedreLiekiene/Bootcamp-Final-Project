import express from "express";
import mongoose from "mongoose";
import { registerValidation, loginValidation, recipeCreateValidation } from "./validations.js";
import checkAuthor from "./utils/checkAuthor.js"
import * as  UserControler from "./controllers/UserControler.js";
import * as RecipeControler from "./controllers/RecipeController.js"
import multer from "multer"
import handleValidationErrors from "./utils/handleValidationErrors.js";
import cors from 'cors'

const userName = `OlgaVo`
const password = `pass321`
mongoose
  .connect(
    `mongodb+srv://${userName}:${password}@cluster0.4oyrd1r.mongodb.net/TrainingProject?retryWrites=true&w=majority`
  )
  .then(() => console.log("conected to DB"))
  .catch(() => console.log("DB error"));

const app = express();
const PORT = 3001;

const storage = multer.diskStorage({
    destination: (_, __, cb) => {
cb(null, 'uploads');
    },
    filename:(_, file, cb) => {
        cb(null, file.originalname);
    },
})

const upload = multer ({ storage })

app.use(express.json());
app.use("/uploads", express.static("uploads"));
app.use(cors())

app.post("/auth/login",loginValidation, handleValidationErrors,UserControler.login);
app.post("/auth/register",registerValidation,handleValidationErrors ,UserControler.register);
app.get('/auth/me', checkAuthor, UserControler.getMe)
app.post('/upload', checkAuthor, upload.single('image'), (req, res) => {
    res.json({
        url: `/uploads/${req.file.originalname}`,
    })
})

app.get('/recipes', RecipeControler.getAll)
app.get('/recipes/:id', RecipeControler.getOne)
app.get('/recipes/sections/vegetarian', RecipeControler.getAllVegetarian)
app.get('/recipes/sections/lunch', RecipeControler.getAllLunch)
app.get('/recipes/sections/dessert', RecipeControler.getAllDessert)
app.get('/recipes/sections/dinner', RecipeControler.getAllDinner)
app.get('/recipes/sections/breakfast', RecipeControler.getAllBreakfast)
app.post('/recipes',checkAuthor, recipeCreateValidation, handleValidationErrors,  RecipeControler.create)
app.delete('/recipes/:id',checkAuthor, RecipeControler.remove)
app.patch('/recipes/:id',checkAuthor, handleValidationErrors, RecipeControler.update)


app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`Server started on ${PORT}`);
});
