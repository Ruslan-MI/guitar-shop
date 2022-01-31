import {
  combineReducers,
} from "@reduxjs/toolkit";

import {
  reducer as dataReducer,
} from "./data";
import {
  reducer as catalogReducer,
} from "./catalog";
import {
  StoreNameSpace,
} from "../../const";

export const rootReducer = combineReducers({
  [StoreNameSpace.DATA]: dataReducer,
  [StoreNameSpace.CATALOG]: catalogReducer,
});
