import "./recipeCard.css";
import CustomImage from '../../components/CustomImage';
import { ServerUrl } from "../../utils/config";


const RecipeCard = ({recipe}) => {
  let authorImage = recipe.user.avatarUrl 
    ? ServerUrl + recipe.user.avatarUrl
    : "/img/top-chefs/img_3.jpg"
  return (
    <div className="recipe-card">
        <CustomImage imgSrc={ServerUrl + recipe.imageUrl} pt="65%"/>
        <div className="recipe-card-info">
            <img className="author-img" src={authorImage} alt="" />
            <p className="recipe-title">{recipe.title}</p>
            <p className="recipe-desc">{recipe.description.substr(0, 200)}...</p>
            <a className="view-btn" href={`recipe?id=${recipe._id}`}>VIEW RECIPE</a>
          
    </div>
    </div>
  )
}

export default RecipeCard