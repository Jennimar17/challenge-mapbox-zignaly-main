import axios from "axios";
import { URL_API } from "../../utils/constants.js";
const API_KEY =
  "pk.eyJ1IjoiamVubmltYXIxNyIsImEiOiJjbDFmbDVrcG0xMmM2M2lsZ3Z5cWptMXFpIn0.CJPsd-3MRUofdrwB23WNXQ";
const Types = { GET_LOCATION: "GET_LOCATION" };

console.log(API_KEY);
console.log(URL_API);

const locations = (response) => ({
  type: Types.GET_LOCATION,
  payload: response,
});

const getLocation = (location) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `${URL_API}mapbox.places/${location}.json?autocomplete=false&access_token=${API_KEY}`
      );
      dispatch(locations(response.data));
    } catch (e) {
      const error = { errorMessage: "Location Not Found" };
      dispatch(locations(error));
    }
  };
};

export default { Types, getLocation };
