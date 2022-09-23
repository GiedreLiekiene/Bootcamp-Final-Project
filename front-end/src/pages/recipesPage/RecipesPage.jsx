import { useState, useEffect, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import PreviousSearches from '../../components/recipespage/PreviousSearches';
import RecipeCard from './RecipeCard';
import CategoriesSection from '../../components/mainpage/CategoriesSection';
import './recipesPage.css';
import { ServerUrl } from '../../config';

const RecipesPage = () => {
  console.log("RecipesPage - Rendered START")
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  const [allRecipes, setAllRecipes] = useState([]);

  useEffect(() => {
    console.log("RecipesPage - Load - Start");
    let apiUrl = `${ServerUrl}/recipes`
    fetch(apiUrl)
      .then((response) => response.json())
      .then((response) => {
        //console.log(response);        
        console.log("RecipesPage - Loaded");

        setAllRecipes(response);        
      })
      .catch((err) => console.error(err));
  //}, [category]);
  }, []);

  const recipes = useMemo(() => {   
    let recipes = allRecipes;
    console.log("RecipesPage - Filter");
    if (category) {      
      recipes = recipes.filter((recipe) => {
        //console.log(recipe, recipe.sections)
        return recipe.sections.includes(category)
      });
    }

    recipes=recipes.slice(0, 8)
    recipes.sort(() => Math.random() - 0.5)
    return recipes;
  }, [allRecipes, category])

  console.log("RecipesPage - Rendered END")

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