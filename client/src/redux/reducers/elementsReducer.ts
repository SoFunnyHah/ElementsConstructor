import { AnyAction } from "@reduxjs/toolkit";
import { ADD_ELEMENT, DELETE_ELEMENT, GET_ELEMENT_LIST } from "../types";

const initState: {
  rows: { id?: number; elementName: string }[];
} = {
  rows: [],
};

// interface AddElementAction {
//   type: typeof ADD_ELEMENT;
//   payload: {
//     elementName: string;
//   };
// }

// interface GetElementAction {
//   type: typeof GET_ELEMENT_LIST;
//   payload: {
//     id: number;
//     elementName: string;
//   }[];
// }

// type AllActions = AddElementAction | GetElementAction;

export default function elementsReducer(state = initState, action: AnyAction ) {
  const { type, payload } = action;
  switch (type) {
    case ADD_ELEMENT:
      return {
        rows: [...state.rows, payload],
      };
    case GET_ELEMENT_LIST:
      return {
        rows: payload,
      };
    case DELETE_ELEMENT:
      return {
        rows: payload,
      }
    default:
      return { ...state };
  }
}
