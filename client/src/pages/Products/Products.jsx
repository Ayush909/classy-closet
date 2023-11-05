import React, { useState } from "react";
import "./Products.scss";
import ProductList from "../../components/ProductList/ProductList";
import { useParams } from "react-router-dom";

const Products = () => {
  const categoryName = useParams().id;

  const [maxPrice, setMaxPrice] = useState(1000);
  const [sortBy, setSortBy] = useState(null);

  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          <div className="inputItem">
            <input type="checkbox" id="men" value={1} />
            <label htmlFor="men">Men</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="women" value={2} />
            <label htmlFor="women">Women</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="shoes" value={3} />
            <label htmlFor="shoes">Shoes</label>
          </div>
        </div>
        <div className="filterItem">
          <h2>Filter By Price</h2>
          <div className="inputItem">
            <span>0</span>
            <input
              type="range"
              min={0}
              max={1000}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort By</h2>
          <div className="inputItem">
            <input
              type="radio"
              name="price"
              id="asc"
              onChange={(e) => setSortBy("asc")}
            />
            <label htmlFor="asc">Price (Lowest to Highest)</label>
          </div>
          <div className="inputItem">
            <input
              type="radio"
              name="price"
              id="desc"
              onChange={(e) => setSortBy("desc")}
            />
            <label htmlFor="desc">Price (Highest to Lowest)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img
          className="categoryBanner"
          src="https://images.pexels.com/photos/826380/pexels-photo-826380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="men category banner"
        />
        <ProductList
          categoryName={categoryName}
          maxPrice={maxPrice}
          sortBy={sortBy}
        />
      </div>
    </div>
  );
};

export default Products;
