import { ADD_ELEMENT, DELETE_ELEMENT, GET_ELEMENT_LIST } from "../types";
import axios from 'axios';
import { Dispatch } from "@reduxjs/toolkit";
import { oneElement } from "../../components/types/types";

export const addElement = (payload: oneElement) => ({type: ADD_ELEMENT, payload});
export const fetchElement = (payload: oneElement[]) => ({type: GET_ELEMENT_LIST, payload});
export const deleteElement = (payload: oneElement[]) => ({type: DELETE_ELEMENT, payload});

export const addElementAsync = (input:string) => (dispatch: Dispatch):void => {
    console.log('sended on back', input);
    axios.post('/api/element', { input })
      .then((res) => dispatch(addElement(res.data)))
      .catch(console.log);
  };

  export const fetchElemesAsync = () => (dispatch: Dispatch):void => {
    axios('/api/element')
    .then((res)=> dispatch(fetchElement(res.data)))
    .catch(console.log);
  };

  export const deleteElementAsync = (id:number) => (dispatch: Dispatch):void => {
    axios.delete(`/api/element/removal/${id}`)
    .then((res)=>dispatch(deleteElement(res.data)))
    .catch(console.log);
  }