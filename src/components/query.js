import React, { useState } from "react";
import RestaurantList from "./restaurantList";

const restaurantList = [
    {
      name: "The Fish Market",
      location: { lat: 64.1508, lng: -21.9536 },
    },
    {
      name: "Bejarins Beztu Pylsur",
      location: { lat: 64.1502, lng: -21.9519 },
    },
    {
      name: "Grillmarkadurinn",
      location: { lat: 64.1475, lng: -21.9347 },
    },
    {
      name: "Kol Restaurant",
      location: { lat: 64.1494, lng: -21.9337 },
    },
  ];

const Query = (props) => {
    const [searchTerm, setSearchTerm] = useState('');

    return (
    <div>
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button>Search</button>
        <RestaurantList list={restaurantList} onClickHandler={props.entryClickHandler} />
    </div>
    );
}

export default Query;