/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import coin1 from "../../assets/1.svg";
import coin2 from "../../assets/2.svg";
import coin3 from "../../assets/3.svg";

const ListCoins = ({ title, list }) => {
  const getImage = (key) => {
    switch (key) {
      case 1:
        return coin1;
      case 2:
        return coin2;
      case 3:
        return coin3;
      default:
        return coin1;
    }
  };

  return (
    <div>
      <h3>{title}</h3>
      {list.map((coin, index) => {
        const imgsrc = getImage(index + 1);
        return (
          <div className="coin-item">
            <img src={imgsrc} alt={coin.name} />
            <div>
              <h4>{coin.coin}</h4>
              <h6>{coin.price}</h6>
            </div>
          </div>
        );
      })}
    </div>
  );
};

ListCoins.propTypes = {
  title: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ListCoins;
