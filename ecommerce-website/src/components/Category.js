import React, { useState, useEffect } from "react";
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { Link } from "react-router-dom";

function Category({ changeCateg }) {
  // define categories of products in the app
  const categories = [
    "electronics",
    "clothing",
    "books",
    "fitness",
    "phones",
    "toys",
  ];

  // access cloudinary account
  const cld = new Cloudinary({
    cloud: {
      cloudName: "dhdmchgsh",
    },
  });
  return (
    <div className="categories">
      <h1>Shop by Category</h1>

      {categories.map((category) => {
        // fetch image from cloudinary based on category

        var myImage = cld.image(`categories/${category}`);

        return (
          <div className="category">
            <Link
              to="/products"
              onClick={() => changeCateg(category)}
              className="category-link"
            >
              <AdvancedImage cldImg={myImage} className="image" />
              <p>{category}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Category;
