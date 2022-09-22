import "./recipeCard.css";
import CustomImage from '../../components/CustomImage';

const RecipeCard = ({recipe}) => {
  return (
    <div className="recipe-card">
        <CustomImage imgSrc={recipe.image} pt="65%"/>
        <div className="recipe-card-info">
            <img className="author-img" src={recipe.authorImg} alt="" />
            <p className="recipe-title">{recipe.title}</p>
            <p className="recipe-desc">{recipe.description.substr(0, 200)}...</p>
            <a className="view-btn" href="#">VIEW RECIPE</a>
    </div>
    </div>
  )
}

export default RecipeCard