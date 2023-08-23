import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { MENU_API, MENU_IMAGE } from "../utils/constants";

const RestMenu = () => {
  const [restData, setRestData] = useState([]);
  useEffect(() => {
    resData();
  }, []);

  const { resId } = useParams();
  console.log(resId);
  const resData = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    console.log(json);
    setRestData(
      json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
        .itemCards
    );
    console.log(restData);
  };
  const menuList = restData.map((rest) => (
    <div className="menuCard">
      <div>
        {rest.card.info.name} ----- Rs. {rest.card.info.price / 100}
      </div>
      <div>{rest.card.info.description}</div>

      <img
        className="menu-img"
        alt="res-logo"
        src={MENU_IMAGE + rest.card.info.imageId}
      />
    </div>
  ));

  return (
    <div>
      <h1>Menu </h1>
      <div>{menuList}</div>
    </div>
  );
};

export default RestMenu;
