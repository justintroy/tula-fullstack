import { combineReducers } from "redux";

import poems from "./poems";
import auth from "./auth";

export default combineReducers({ poems, auth });
