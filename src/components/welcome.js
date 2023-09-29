//XXpkaF0ejDNRdXZl77Ev3_0S3XW9QkvOcme-4pdBz24

import React, { useState } from "react";
import Query from "./query";



  const userPosition = { lat: 64.1472, lng: -21.9398 };

const Welcome = () => {

    const API_KEY = 'XXpkaF0ejDNRdXZl77Ev3_0S3XW9QkvOcme-4pdBz24';
    const [restaurantPosition, setRestaurantPosition] = useState(null);

    const onClickHandler_ = (location) => {
      setRestaurantPosition(location);
    };

    

    return (
      <div>
        <Query entryClickHandler={onClickHandler_} />
        <Map
          apikey={API_KEY}
          userPosition={userPosition}
          restaurantPosition={restaurantPosition}
        />
      </div>
    );
}

export default Welcome;