import { configureStore } from "@reduxjs/toolkit";
import elementsReducer from "./reducers/elementsReducer";
import markerReducer from "./reducers/markerReducer";

export default configureStore({
  reducer: {
    elementsList: elementsReducer, 
    marker: markerReducer,
  },
});
