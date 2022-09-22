import React, { useState, useEffect } from 'react'
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
  let categoryNames = [
    "Breakfast",
    "Lunch",
    "Dinner",
  ];  

  let categoryImages = [
    "http://gfdfgfd",
    "http://gfdfgfd",
    "http://gfdfgfd",
  ];  


  return (
    <div class="categories-list-container">
      <div class="categories-list">
        <ol>
        <CategoryItem photo="/img/gallery/img_1.jpg" name="Breakfast" link="recipes?category=Breakfast" key="1" />
        <CategoryItem photo="http://unspahslashg.com/buotragfdsfdsgdsg.jpg" name="Breakfast" link="" key="2" />
          
        </ol>    
      </div>  
    </div>
  )
}

export default CategoriesList
