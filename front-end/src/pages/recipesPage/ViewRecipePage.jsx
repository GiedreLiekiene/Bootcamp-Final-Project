import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import "./viewRecipePage.css";
import { ServerUrl } from '../../config';

const ViewRecipePage = () => {
  const [searchParams] = useSearchParams();
  const recipeId = searchParams.get("id");

  const [recipe, setRecipe] = useState(null);
  useEffect(() => {
    let apiUrl = `${ServerUrl}/recipes/${recipeId}`

    fetch(apiUrl)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        //response=response.slice(0, 8)
        setRecipe(response);        
      })
      .catch((err) => console.error(err));
  }, [recipeId]);

  return recipe == null ? (<div>Loading...</div>) : (
    <>
    <div className='recipe-container'>
        <p className='recipe-title'>{recipe.title}</p>
        <img className="recipe-img" src={ServerUrl + recipe.imageUrl} alt="" />
        <p className="recipe-ingr">INGREDIENTS: {recipe.ingredients}</p>
        <p className="recipe-desc">DESCRIPTION: {recipe.description}</p>
    </div>
    
    </>
  )
}

export default ViewRecipePage