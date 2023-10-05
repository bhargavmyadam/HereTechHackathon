//XXpkaF0ejDNRdXZl77Ev3_0S3XW9QkvOcme-4pdBz24

import React, { useState,useEffect } from "react";
import Query from "./query";
import Map from "./map";



  

const Welcome = (props) => {

    const [userPosition,setUserPosition] = useState('');
    // const componentDidMount = () => {
    //   navigator.geolocation.getCurrentPosition(function(position) {
    //     console.log("Latitude is :", position.coords.latitude);
    //     console.log("Longitude is :", position.coords.longitude);
    //     setUserPosition(position.coords)
    //   });
    // }

    const API_KEY = 'XXpkaF0ejDNRdXZl77Ev3_0S3XW9QkvOcme-4pdBz24';
    const [restaurantPosition, setRestaurantPosition] = useState(null);

    const onClickHandler_ = (location) => {
      console.log("clicked " + location.lat);
      setRestaurantPosition(location);
      //console.log(restaurantPosition.lat);
      console.log("clicked " + location.lat);
    };

    useEffect(() => {
      // Use the geolocation API to get the user's position
      navigator.geolocation.getCurrentPosition(
        function (position) {
          console.log("Latitude is :", position.coords.latitude);
          console.log("Longitude is :", position.coords.longitude);
          const temp = {
            lat : position.coords.latitude , 
            lng : position.coords.longitude
          };
          setUserPosition(temp);
        },
        function (error) {
          console.error("Error getting user's position:", error);
        }
      );
    }, []);
    

    return (
      <div>
        <Query entryClickHandler={onClickHandler_} apikey={API_KEY} userPosition={userPosition} />
        <Map
          apikey={API_KEY}
          userPosition={userPosition}
          restaurantPosition={restaurantPosition}
        />
      </div>
    );
}

export default Welcome;