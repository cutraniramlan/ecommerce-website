import React from "react";
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { useParams } from "react-router-dom";

function Productpage({ addToCart, list }) {
  const cld = new Cloudinary({
    cloud: {
      cloudName: "dhdmchgsh",
    },
  });
  const { title } = useParams();

  return (
    <div>
      {list
        .filter((item) => item.title === title)
        .map((item) => {
          var myImage = cld.image(`products/${item.title}`);
          return (
            <div className="product-page">
              <AdvancedImage cldImg={myImage} className="big-image" />
              <div>
                <h5>{item.title}</h5>
                <p>${item.price}</p>
                <button
                  className="firstbtn"
                  onClick={() => {
                    addToCart(item.id);
                  }}
                >
                  ADD TO CART
                </button>
                <button>BUY NOW</button>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Productpage;
