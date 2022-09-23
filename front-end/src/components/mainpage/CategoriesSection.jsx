import React from 'react'
import { useSearchParams } from 'react-router-dom'
import "./categoriesSection.css";

const CategoryItem = ({photo, name, category}) => {
  const [, setSearchParamters] = useSearchParams()
  return (
    <li>
        <a
            className="category-button"
            //href={link}
            onClick={() => { setSearchParamters({"category": category}) }}
        >
            <img src={photo} alt="" />
            <span className="category-name">{name}</span>
        </a>
    </li>
  )
}

const CategoriesList = () => {
  return (
    <div className="categories-list-container">
      <div className="categories-list">
        <ol>
        <CategoryItem photo="/img/gallery/img_1.jpg" name="Breakfast" category="breakfast" key="1" />
        <CategoryItem photo="/img/gallery/img_2.jpg" name="Lunch" category="lunch" key="2" />
        <CategoryItem photo="/img/gallery/img_3.jpg" name="Dinner" category="dinner" key="3" />
        <CategoryItem photo="/img/gallery/img_4.jpg" name="Vegetarian" category="vegetarian" key="4" />
        <CategoryItem photo="/img/gallery/img_6.jpg" name="Dessert" category="dessert" key="6" />
        </ol>    
      </div>  
    </div>
  )
}

export default CategoriesList
