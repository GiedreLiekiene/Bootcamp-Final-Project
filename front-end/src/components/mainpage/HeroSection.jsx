import React from 'react';
import "../../partials/animation.css"
import "./heroSection.css";
import CustomImage from './CustomImage';

const HeroSection = () => {
  const images = [
    "/img/gallery/img_1.jpg",
    "/img/gallery/img_2.jpg", 
    "/img/gallery/img_3.jpg",
    "/img/gallery/img_4.jpg",
    "/img/gallery/img_5.jpg",
    "/img/gallery/img_6.jpg",
    "/img/gallery/img_7.jpg",
    "/img/gallery/img_8.jpg",
    "/img/gallery/img_9.jpg",
  ]
  return (
    <div className="section hero">
        <div className="col typography">
            <h1 className="title">Huge selection of delicious recipe ideas</h1>
            <p className="info">Find the perfect recipe for any occasion. Explore our huge selection of delicious recipe ideas including: easy desserts, delicious vegan and vegetarian dinner ideas, gorgeous pasta recipes, quick bakes, family-friendly meals and gluten-free recipes.</p>
            <button className="btn">Explore now</button>
        </div>
        <div className="col gallery">
          { images.map((src, index) => (
          <CustomImage key={index} imgSrc={src} pt={"90%"} />
          )) }
        </div>
    </div>
  )
}

export default HeroSection 