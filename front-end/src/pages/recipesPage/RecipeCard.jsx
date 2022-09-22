import "./recipeCard.css";
import CustomImage from '../../components/CustomImage';

const RecipeCard = ({recipe}) => {
  return (
    <div className="recipe-card">
        <CustomImage imgSrc={recipe.image} pt="65%"/>
        <div className="recipe-card-info">
            <img className="author-img" src={recipe.authorImg} alt="" />
            <p className="recipe-title">{recipe.title}</p>
            <p className="recipe-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, molestias atque soluta autem tenetur ullam facilis voluptas dolore natus ad quisquam! Perferendis eligendi quasi optio blanditiis dignissimos aspernatur impedit voluptas.</p>
            <a className="view-btn" href="#">VIEW RECIPE</a>
    </div>
    </div>
  )
}

export default RecipeCard