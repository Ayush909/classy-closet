import React from "react";
import { Link } from "react-router-dom";
import "./Categories.scss";

const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img
            src="https://images.pexels.com/photos/18800089/pexels-photo-18800089/free-photo-of-woman-in-a-witch-costume-sitting-among-pumpkins.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="sale is on image"
          />
          <button>
            <Link className="link" to="/products/sale">
              Sale
            </Link>
          </button>
        </div>
        <div className="row">
          <img
            src="https://images.pexels.com/photos/6029985/pexels-photo-6029985.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="women category image"
          />
          <button>
            <Link className="link" to="/products/women">
              Women
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <img
            src="https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="new season image"
          />
          <button>
            <Link className="link" to="/products/new">
              New Season
            </Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img
                src="https://images.pexels.com/photos/2460486/pexels-photo-2460486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="men category image"
              />
              <button>
                <Link className="link" to="/products/men">
                  Men
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <img
                src="https://images.pexels.com/photos/2690323/pexels-photo-2690323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="accessories image"
              />
              <button>
                <Link className="link" to="/products/accessories">
                  Accessories
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img
            src="https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="shoes image"
          />
          <button>
            <Link className="link" to="/products/shows">
              Shoes
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
