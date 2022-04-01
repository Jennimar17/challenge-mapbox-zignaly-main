import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import locationReducer from "./reducers/locationReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const middlewares = [logger, thunk];
const store = createStore(
  locationReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
