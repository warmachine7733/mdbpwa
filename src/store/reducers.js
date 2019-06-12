import { combineReducers } from "redux";
import { intl } from "./intl/intlReducer";
import { language } from "./language/reducer";

const appReducer = combineReducers({
  intl,
  language
});
export default appReducer;
