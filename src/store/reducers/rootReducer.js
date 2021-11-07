import { combineReducers } from "redux";
import authReducer from "./authReducer";
import contactReducer from "./contactReducer";

const rootReducer = combineReducers({
  contacts: contactReducer,
  auth: authReducer,
});

export default rootReducer;
