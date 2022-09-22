import PreviousSearches from '../../components/recipespage/PreviousSearches';
import RecipeCard from './RecipeCard';
import CategoriesSection from '../../components/mainpage/CategoriesSection';
import './recipesPage.css';

const RecipesPage = () => {
 
  return (
    <>
    <PreviousSearches />
    <div className='recipes-container'>
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
    </div>
    <CategoriesSection />
    </>
  )
}

export default RecipesPage