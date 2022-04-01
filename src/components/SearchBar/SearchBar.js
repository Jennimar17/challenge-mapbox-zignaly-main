import React, { useState } from "react";
import axios from "axios";
import { debounce } from "lodash";
import CardLocation from "../CardLocation/CardLocation.js";
import { URL_API } from "../../utils/constants.js";
const API_KEY =
  "pk.eyJ1IjoiamVubmltYXIxNyIsImEiOiJjbDFmbDVrcG0xMmM2M2lsZ3Z5cWptMXFpIn0.CJPsd-3MRUofdrwB23WNXQ";
const SearchBar = () => {
  const [data, setData] = useState(null);
  const handleCoupon = debounce(async (location) => {
    const response = await axios.get(
      `${URL_API}mapbox.places/${location}.json?access_token=${API_KEY}`
    );
    setData(response.data);
  }, 1000);

  return (
    <div>
      <input onChange={(e) => handleCoupon(e.target.value)} />
      {data && <CardLocation data={data} />}
    </div>
  );
};

export default SearchBar;
