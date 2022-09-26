import { useState, useEffect, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import PreviousSearches from '../../components/recipespage/PreviousSearches';
import RecipeCard from '../../components/recipespage/RecipeCard';
import CategoriesSection from '../../components/mainpage/CategoriesSection';
import './recipesPage.css';
import { ServerUrl } from '../../config';


const RecipesPage = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    let apiUrl = `${ServerUrl}/recipes`
    if (category) {
      apiUrl += `/sections/${category}`
    }

    fetch(apiUrl)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        response.sort(() => Math.random() - 0.5)
        setRecipes(response);        
      })
      .catch((err) => console.error(err));
  }, [category]);

  const [maxRecipesCount, setMaxRecipesCount] = useState(8);

  const trimmedRecipes = useMemo(() => {
    return recipes.slice(0, maxRecipesCount);
  }, [maxRecipesCount, recipes]);

  const showLoadMoreBtn = recipes.length > maxRecipesCount;

  return (
    <>
    <PreviousSearches />
    <CategoriesSection />
    <div className='recipes-container'>
      {/* <RecipeCard /> */}
      {trimmedRecipes.map((recipe, index) => (
        <RecipeCard key={index} recipe={recipe} />
      ))}
    </div>
    {showLoadMoreBtn && (
    <div className='load-btn-container'>
      <button className="load-btn"
        onClick={() => {
          setMaxRecipesCount(maxRecipesCount + 4);
        }}>
          LOAD MORE
      </button>
    </div>)}
    
    </>
  )
}

export default RecipesPage