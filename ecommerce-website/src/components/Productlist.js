import React from "react";
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { Link } from "react-router-dom";

function Productlist({ list, category }) {
  const cld = new Cloudinary({
    cloud: {
      cloudName: "dhdmchgsh",
    },
  });

  const filteredProducts = list.filter((product) => product.categ == category);
  return (
    <div>
      {filteredProducts.map((item) => {
        var myImage = cld.image(`products/${item.title}`);
        return (
          <div className="product">
            <Link to={`/products/${item.title}`} className="product-link">
              <AdvancedImage cldImg={myImage} className="image" />
              <p>{item.title}</p>
              <span>${item.price}</span>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Productlist;
