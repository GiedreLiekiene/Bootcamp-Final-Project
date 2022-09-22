import React from 'react'
import "./categoriesSection.css";

const CategoryItem = ({photo, name, link}) => {
  return (
    <li>
        <a
            className="category-button"
            href={link}
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
        <CategoryItem photo="/img/gallery/img_1.jpg" name="Breakfast" link="recipes?category=breakfast" key="1" />
        <CategoryItem photo="/img/gallery/img_2.jpg" name="Lunch" link="recipes?category=lunch" key="2" />
        <CategoryItem photo="/img/gallery/img_3.jpg" name="Dinner" link="recipes?category=Dinner" key="3" />
        <CategoryItem photo="/img/gallery/img_4.jpg" name="Vegetarian" link="recipes?category=vegetrian" key="4" />
        <CategoryItem photo="/img/gallery/img_6.jpg" name="Dessert" link="recipes?category=dessert" key="6" />
        </ol>    
      </div>  
    </div>
  )
}

export default CategoriesList
