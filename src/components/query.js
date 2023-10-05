import React, { useState } from "react";
import RestaurantList from "./restaurantList";
import axios from 'axios';

const initialRestaurantList = [
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
    const [restaurantList, setRestaurantList] = useState(initialRestaurantList);
    const [searchTerm, setSearchTerm] = useState('');
    const apiUrl = `https://discover.search.hereapi.com/v1/discover?at=${props.userPosition.lat},${props.userPosition.lng}&limit=6&lang=en&q=${searchTerm}&apiKey=${props.apikey}`
    console.log(apiUrl);
    const handleSearch = (e) => {
    
      axios.get(apiUrl)
        .then(response => {
          // Handle successful response
          console.log(response);
          const list = response.data.items.map((item)=>{
            return {
               name: item.title,
               location: item.position

               
            };
          })
          setRestaurantList(list);
        })

        .catch(error => {
          // Handle error
          console.error('Error:', error);
        });
      
    }

    return (
    <div>
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
        <RestaurantList list={restaurantList} entryClickHandler={props.entryClickHandler} />
    </div>
    );
}

export default Query;