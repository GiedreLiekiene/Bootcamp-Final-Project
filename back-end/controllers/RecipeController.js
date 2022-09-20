import { response } from "express";
import RecipeModel from "../models/Recipe.js";
import { recipeCreateValidation } from "../validations.js";

export const getAll = async (req, res) => {
  try {
    const posts = await RecipeModel.find().populate("user").exec();
    res.json(posts);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Can't get recipe",
    });
  }
};

export const getOne = async (req, res) => {
  try {
    const recipeId = req.params.id;
    RecipeModel.findOneAndUpdate(
      {
        _id: recipeId,
      },
      {
        $inc: { viewsCount: 1 },
      },
      {
        returnDocument: "after",
      },
      (err, doc) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            message: "Cant return document",
          });
        }
        if (!doc) {
          return res.status(404).json({
            message: "Recipe not founded",
          });
        }
        res.json(doc);
      }
    );
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Can't get recipes",
    });
  }
};

export const create = async (req, res) => {
  try {
    const doc = new RecipeModel({
      title: req.body.title,
      description: req.body.description,
      imageUrl: req.body.imageUrl,
      ingredients: req.body.ingredients,
      user: req.userId,
    });
    const recipe = await doc.save();
    res.json(recipe);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Recipe adding fail",
    });
  }
};
export const remove = async (req, res) => {
  try {
    const recipeId = req.params.id;

    RecipeModel.findByIdAndDelete(
      {
        _id: recipeId,
      },
      (err, doc) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            message: "Cant delete Recipe",
          });
        }
        if (!doc) {
          return res.status(404).json({
            message: "Recipe not found",
          });
        }
        res.json({
          success: true,
        });
      }
    );
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Can get recipe",
    });
  }
};
export const update = async (req, res) => {
  try {
    const recipeId = req.params.id;
    await RecipeModel.updateOne(
      {
        id: recipeId,
      },
      {
        title: req.body.title,
        text: req.body.description,
        imageUrl: req.body.imageUrl,
        tags: req.body.ingredients,
        user: req.userId,
      }
    );
    res.json({
      success: true,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Can't update recipes",
    });
  }
};
