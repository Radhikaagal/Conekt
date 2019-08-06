import axios from 'axios';
import { setAlert } from './../actions/alerts';
import {
   
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_PROFILE
  } from './types';


export const login = (userId, password) => async dispatch => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
  
    const body = JSON.stringify({userId, password });
  
    try {
      const res = await axios.post('https://conektapi.herokuapp.com/users/login/', body, config);
  
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      });
  
      
    } catch (err) {
      const msg = err.response.data.message;
  
      dispatch(setAlert(msg, 'danger'));
      
  
      dispatch({
        type: LOGIN_FAIL
      });
    }
  };
  

  