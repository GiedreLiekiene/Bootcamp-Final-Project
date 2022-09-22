import { useState, useEffect } from 'react'
import PreviousSearches from '../../components/recipespage/PreviousSearches';
import RecipeCard from './RecipeCard';
import CategoriesSection from '../../components/mainpage/CategoriesSection';
import './recipesPage.css';
import { ServerUrl } from '../../config';

const RecipesPage = () => {

  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    const apiUrl = `${ServerUrl}/recipes`

    fetch(apiUrl)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        response=response.slice(0, 8)
        response.sort(() => Math.random() - 0.5)
        setRecipes(response);        
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
    <PreviousSearches />
    <CategoriesSection />
    <div className='recipes-container'>
      {/* <RecipeCard /> */}
      {recipes.map((recipe, index) => (
        <RecipeCard key={index} recipe={recipe} />
      ))}
    </div>
    
    </>
  )
}

export default RecipesPage