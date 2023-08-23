import React, { useState } from "react";
import RestCard from "./RestCard";

const Body = ({ restData }) => {
  const [search, setSearch] = useState("");
  const handleClick = () => {
    // const filterList = restData.filter(({ restData }) => <div>hiih</div>);
    <div>Filtered</div>;
    console.log("button clicked");
  };
  return (
    <div>
      {/* <input>Search</input> */}
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      ></input>
      <button
        onClick={() => {
          handleClick();
        }}
      >
        Search
      </button>
      <div className="rescard">
        <RestCard />
      </div>
    </div>
  );
};

export default Body;
