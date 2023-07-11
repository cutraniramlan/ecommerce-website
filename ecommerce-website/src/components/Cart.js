import React from "react";
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";

function Cart({ cartItems, removeItem }) {
  const cld = new Cloudinary({
    cloud: {
      cloudName: "dhdmchgsh",
    },
  });
  return (
    <div>
      {cartItems.map((item) => {
        var myImage = cld.image(`products/${item.title}`);
        return (
          <div className="cart">
            <AdvancedImage cldImg={myImage} className="cart-image" />
            <div>
              <h6>{item.title}</h6>
              <p>${item.price}</p>
              <button
                onClick={() => {
                  removeItem(item.id);
                }}
              >
                DELETE
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Cart;
