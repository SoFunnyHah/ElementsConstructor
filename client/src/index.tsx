import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import store from './redux/store';
import axios from 'axios';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from '@reduxjs/toolkit';

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ThunkDispatch<typeof store.dispatch, any, AnyAction>  



axios.defaults.baseURL = process.env.REACT_APP_BASEURL;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store = {store}>
    <BrowserRouter>
     <App />
    </BrowserRouter>
  </Provider>,
);

