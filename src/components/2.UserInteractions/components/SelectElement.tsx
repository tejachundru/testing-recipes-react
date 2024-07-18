import React, { useState } from "react";

const SelectElement = () => {
  const [cityName, setCityName] = useState("Mumbai");

  return (
    <div>
      <h2> City Name: {cityName} </h2>
      <label htmlFor="selectCity">Select City</label>
      <select
        id="selectCity"
        onChange={(e) => {
          setCityName(e.target.value);
        }}
      >
        <option> Mumbai</option>
        <option> Bangalore</option>
        <option> Chennai</option>
      </select>
    </div>
  );
};

export default SelectElement;
