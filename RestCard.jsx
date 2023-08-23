import React from "react";
import { useState, useEffect } from "react";
import { CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const RestCard = () => {
  const [restData, setRestData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json);
    setRestData(
      json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants ||
        json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants
    );
  };
  //   console.log(restData);

  const restList = restData.map((res) => (
    <div key={res.info.id}>
      <div className="card">
        <div>Name: {res.info.name}</div>
        <Link to={"/restaurants/" + res.info.id}>
          <img
            className="rounded-lg"
            alt="res-logo"
            src={CDN_URL + res.info.cloudinaryImageId}
          />
        </Link>
        console.log({res.info.id})<div>Rating: {res.info.avgRating}</div>
        <div>Price: {res.info.costForTwo}</div>
      </div>
    </div>
  ));

  return (
    <div className="card-container">
      {/* <div>The restraunt list is :</div> */}
      {restList}
    </div>
  );
};

export default RestCard;
