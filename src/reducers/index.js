import { combineReducers } from "redux";
import dogReducer from "./dogReducer";
import dogPageReducer from "./dogPageReducer";

export default combineReducers({
  info: dogReducer,
  page: dogPageReducer
});
