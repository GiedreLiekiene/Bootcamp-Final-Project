import React, { useState, useEffect } from 'react'
import "./categoriesList.css";

const CategoryItem = ({photo, name}) => {
  return (
    <li>
        <a
            className="category-button"
            href={photo.links.html}
        >
            <img src={photo.urls.regular} alt="" />
            <span className="category-name">{name}</span>
        </a>
    </li>
  )
}

const CategoriesList = () => {
  const [photos, getPhotos] = useState([]);
  useEffect(() => {
    const count = 8;
    const apiKey = `EDmqrhjFrU2KqPuME5F2pfpc22qYNehs3w5VIEvmbns`;
    let query = "food";
    let orientation = "squarish";
    const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}&orientation=${orientation}&query=${query}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((response) => {
        getPhotos(response);        
      })
      .catch((err) => console.error(err));
  }, []);

  let categoryNames = [
    "Dinner",
    "Vegetarian",
    "Healthy",
    "Vegan",
    "Dessert",
    "Soups",
    "Salads",
    "Breakfast",
  ];  

  return (
    <div class="categories-list-container">
      <div class="categories-list">
        <ol>
          {photos.map((photo, index) => 
            <CategoryItem photo={photo} name={categoryNames[index]} key={index} />
        )}
        </ol>    
      </div>  
    </div>
  )
}

export default CategoriesList
