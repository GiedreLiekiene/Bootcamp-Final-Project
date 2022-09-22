import PreviousSearches from '../../components/recipespage/PreviousSearches';
import RecipeCard from './RecipeCard';
import CategoriesSection from '../../components/mainpage/CategoriesSection';
import './recipesPage.css';

const RecipesPage = () => {
  const recipes = [
    {
      title: "Green salad",
      image: "/img/gallery/img_1.jpg",
      authorImg: "/img/top-chefs/img_1.jpg",
    },
    {
      title: "American pancakes",
      image: "/img/gallery/img_2.jpg",
      authorImg: "/img/top-chefs/img_2.jpg",
    },
    {
      title: "Breakfast bowl",
      image: "/img/gallery/img_3.jpg",
      authorImg: "/img/top-chefs/img_3.jpg",
    },
    { 
      title: "Panacotta",
      image: "/img/gallery/img_4.jpg",
      authorImg: "/img/top-chefs/img_4.jpg",
    },
    {
      title: "Dinner",
      image: "/img/gallery/img_5.jpg",
      authorImg: "/img/top-chefs/img_5.jpg",
    },
    {
      title: "Pumpkin soup",
      image: "/img/gallery/img_6.jpg",
      authorImg: "/img/top-chefs/img_6.jpg",
    },
    {
      title: "Healthy",
      image: "/img/gallery/img_7.jpg",
      authorImg: "/img/top-chefs/img_7.jpg",
    },
    {
      title: "Vegetarian",
      image: "/img/gallery/img_8.jpg",
      authorImg: "/img/top-chefs/img_8.jpg",
    }
  ].sort(() => Math.random() - 0.5);

  return (
    <>
    <PreviousSearches />
    <div className='recipes-container'>
      {/* <RecipeCard /> */}
      {recipes.map((recipe, index) => (
        <RecipeCard key={index} recipe={recipe} />
      ))}
    </div>
    <CategoriesSection />
    </>
  )
}

export default RecipesPage