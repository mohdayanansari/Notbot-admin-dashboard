import { combineReducers } from "redux";
import { authReducer } from "./auth.reducers.js";

const reducer = combineReducers({
  auth: authReducer,
});

export default reducer;
