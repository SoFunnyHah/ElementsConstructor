import { AnyAction } from "@reduxjs/toolkit";
import { SET_MARKER } from "../types";




export default function markerReducer(state = 0, action: AnyAction ) {
  const { type, payload} = action;
  switch (type) {
    case SET_MARKER:
      return payload;
    default:
      return  state;
  }
}
