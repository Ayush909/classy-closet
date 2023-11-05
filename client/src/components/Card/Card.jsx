import React from "react";
import { Link } from "react-router-dom";

import classes from "./Card.module.css";

const Card = ({ item }) => {
  const getPercentageOff = (item) => {
    const percentOff = ((item.oldPrice - item.newPrice) / item.oldPrice) * 100;
    return parseInt(percentOff);
  };

  return (
    <Link className="link" to={`/product/${item.id}`}>
      <div className={classes.productCard}>
        <div className={classes.productImgBlock}>
          {item.isNew && <span>New Arrival</span>}
          <img src={item.img} alt={item.title} className={classes.mainImg} />
          {item.img2 && (
            <img
              src={item.img2}
              alt={item.title}
              className={classes.secondImg}
            />
          )}
        </div>

        <div className={classes.productDetails}>
          <h5>{item.title}</h5>
          <div className={classes.productPricing}>
            <span className={classes.newPrice}>$ {item.newPrice}</span>

            {!item.isNew && (
              <>
                <span className={classes.originalPrice}>$ {item.oldPrice}</span>
                <span class={classes["percentage-off"]}>
                  {getPercentageOff(item)} OFF
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
