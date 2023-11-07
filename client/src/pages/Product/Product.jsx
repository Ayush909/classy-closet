import React, { useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import BalanceIcon from "@mui/icons-material/Balance";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import "./Product.scss";

const images = [
  "https://images.pexels.com/photos/5145180/pexels-photo-5145180.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/5145182/pexels-photo-5145182.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
];

const Product = () => {
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="product">
      <div className="left">
        <div className="smallImgs">
          <img src={images[0]} alt="" onClick={() => setSelectedImg(0)} />
          <img src={images[1]} alt="" onClick={() => setSelectedImg(1)} />
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>
      <div className="right">
        <h2>Men White Casual Shirt </h2>
        <span className="price">Price</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo animi
          nihil fuga voluptate autem velit ea ut fugit architecto, delectus
          maxime corporis! Porro explicabo ducimus, autem suscipit totam impedit
          maiores!
        </p>

        <div className="quantity">
          <button
            onClick={() =>
              setQuantity((prevQty) => (prevQty === 1 ? 1 : prevQty - 1))
            }
          >
            -
          </button>
          {quantity}
          <button onClick={() => setQuantity((prevQty) => prevQty + 1)}>
            +
          </button>
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
        <div className="details">
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
