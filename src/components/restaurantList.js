import React, { useState } from "react";
import RestaurantEntry from "./restaurantEntry";

function RestaurantList(props) {
    const entries = props.list;
    const list = entries.map((entry) => {
      return <RestaurantEntry data={entry} onClickHandler={props.entryClickHandler} key={Math.random()}></RestaurantEntry>
    });
    return (
      <div id="restaurant-list" style={ {'display': 'grid'} } >
      {list}
      </div>
    )
  }

  export default RestaurantList;
 