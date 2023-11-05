import React from "react";
import Card from "../Card/Card";
import "./ProductList.scss";

const data = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/10080212/pexels-photo-10080212.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&dpr=2",
    img2: "https://images.pexels.com/photos/10080213/pexels-photo-10080213.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&dpr=2",
    title: "Long Sleeve Graphic T Shirt",
    isNew: true,
    oldPrice: 19,
    newPrice: 12,
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/1018911/pexels-photo-1018911.jpeg?auto=compress&cs=tinysrgb&w=600&h=800",
    title: "Solids : Faded Blue Jeans",
    isNew: true,
    oldPrice: 20,
    newPrice: 15,
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/18822204/pexels-photo-18822204/free-photo-of-woman-wearing-a-coat.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&dpr=2",
    title: "Coat",
    oldPrice: 20,
    newPrice: 15,
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/1306248/pexels-photo-1306248.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&dpr=2",
    img2: "https://images.pexels.com/photos/6911546/pexels-photo-6911546.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Men Low Top Sneakers",
    oldPrice: 30,
    newPrice: 15,
  },
  {
    id: 5,
    img: "https://images.pexels.com/photos/18822204/pexels-photo-18822204/free-photo-of-woman-wearing-a-coat.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&dpr=2",
    title: "Coat",
    oldPrice: 20,
    newPrice: 15,
  },
  {
    id: 6,
    img: "https://images.pexels.com/photos/1306248/pexels-photo-1306248.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&dpr=2",
    img2: "https://images.pexels.com/photos/6911546/pexels-photo-6911546.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Men Low Top Sneakers",
    oldPrice: 30,
    newPrice: 15,
  },
];

const ProductList = () => {
  return (
    <div className="productList">
      {data?.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
};

export default ProductList;
