import Actions from "../actions/locationAction.js";

const initialState = { location: null };

const locationReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.Types.GET_LOCATION: {
      let setState = { ...state };
      const { query, features } = action.payload;
      if (query?.length === 0) {
        setState.location = null;
      } else if (features?.length === 0) {
        //Query Not Found
        setState.location.errorMessage = "Query Not Found";
      } else setState.location = action.payload;
      return setState;
    }
    default:
      return state;
  }
};

export default locationReducer;
