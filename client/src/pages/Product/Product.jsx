import React, { useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import BalanceIcon from "@mui/icons-material/Balance";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Product = () => {
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="product">
      <div className="left">
        <div className="smallImgs"></div>
        <div className="mainImg"></div>
      </div>
      <div className="right">
        <h2>Title</h2>
        <span>Price</span>
        <p>description</p>

        <div className="quantity">
          <button>-</button>
          {quantity}
          <button>+</button>
        </div>

        <button className="add">
          <AddShoppingCartIcon />
          Add to Cart
        </button>

        <div className="links">
          <div className="item">
            <FavoriteBorderIcon /> ADD TO WISH LIST
          </div>
          <div className="item">
            <BalanceIcon /> ADD TO COMPARE
          </div>
        </div>

        <div className="info">
          <span>Vendor: Polo</span>
          <span>Product Type: T-Shirt</span>
          <span>Tag: T-Shirt, Women, Top</span>
        </div>
        <hr />
        <div className="info">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
