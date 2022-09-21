import { configureStore } from "@reduxjs/toolkit";
import reducer from "./global-reducer";
export default configureStore({
  reducer,
});
