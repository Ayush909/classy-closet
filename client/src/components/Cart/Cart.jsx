import React from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import "./Cart.scss";

const Cart = () => {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/10080212/pexels-photo-10080212.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&dpr=2",
      img2: "https://images.pexels.com/photos/10080213/pexels-photo-10080213.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&dpr=2",
      title: "Long Sleeve Graphic T Shirt",
      desc: "Lorem Ipsum something something",
      isNew: true,
      oldPrice: 19,
      newPrice: 12,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/1018911/pexels-photo-1018911.jpeg?auto=compress&cs=tinysrgb&w=600&h=800",
      title: "Solids : Faded Blue Jeans",
      desc: "Lorem Ipsum something something",
      isNew: true,
      oldPrice: 20,
      newPrice: 15,
    },
  ];
  return (
    <div className="cart">
      <h1>Product in your Cart</h1>

      {data?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt={item.title} />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">1 x ${item.newPrice}</div>
          </div>
          <DeleteOutlineIcon className="delete" />
        </div>
      ))}

      <div className="total">
        <span>SUBTOTAL</span>
        <span>$190</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className="reset">Reset Cart</span>
    </div>
  );
};

export default Cart;
