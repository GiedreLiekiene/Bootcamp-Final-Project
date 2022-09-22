import "./recipeCard.css";
import CustomImage from '../../components/CustomImage';

const RecipeCard = () => {
  return (
    <div className="recipe-card">
        <CustomImage imgSrc="/img/gallery/img_1.jpg" pt="65%"/>
        <div className="recipe-card-info">
            <img src="/img/top-chefs/img_1.jpg" alt="" />
    </div>
    </div>
  )
}

export default RecipeCard