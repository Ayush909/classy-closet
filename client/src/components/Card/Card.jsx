import React from "react";
import { Link } from "react-router-dom";

import classes from "./Card.module.css";

const Card = ({ item }) => {
  const getPercentageOff = (item) => {
    const oldPrice = parseInt(item.price) + 20;
    const percentOff = (20 / oldPrice) * 100;
    return parseInt(percentOff);
  };

  return (
    <Link className="link" to={`/product/${item.id}`}>
      <div className={classes.productCard}>
        <div className={classes.productImgBlock}>
          {item?.attributes?.isNew && <span>New Arrival</span>}
          <img
            src={
              import.meta.env.VITE_REACT_UPLOAD_URL +
              item?.attributes?.img.data.attributes.url
            }
            alt={item?.attributes?.title}
            className={classes.mainImg}
          />
          {item?.attributes?.img2 && (
            <img
              src={
                import.meta.env.VITE_REACT_UPLOAD_URL +
                item?.attributes?.img2.data.attributes.url
              }
              alt={item?.attributes?.title}
              className={classes.secondImg}
            />
          )}
        </div>

        <div className={classes.productDetails}>
          <h5>{item?.attributes?.title}</h5>
          <div className={classes.productPricing}>
            <span className={classes.newPrice}>
              $ {item?.attributes?.price}
            </span>

            {!item.isNew && (
              <>
                <span className={classes.originalPrice}>
                  $ {item?.attributes?.price + 20}
                </span>
                <span class={classes["percentage-off"]}>
                  {getPercentageOff(item.attributes)} % OFF
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
