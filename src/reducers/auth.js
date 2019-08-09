import {
    LOGIN_SUCCESS,USER_LOADED,
    LOGIN_FAIL,
    LOGOUT,ACCOUNT_DELETED
  }
    from '../actions/types';

    const initialState = {
        token: localStorage.getItem('token'),
        isAuthenticated: null,
        loading: true,
        user: null
      };
      
      export default function(state = initialState, action) {
        const { type, payload } = action;
      
        switch (type) {
          case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload
      };
         
          case LOGIN_SUCCESS:
            localStorage.setItem('token', payload.userToken);
            return {
              ...state,
              ...payload,
              isAuthenticated: true,
              loading: false
            };
          
          
          case LOGIN_FAIL:
          case LOGOUT:
          case ACCOUNT_DELETED:
            localStorage.removeItem('token');
            return {
              ...state,
              token: null,
              isAuthenticated: false,
              loading: false
            };
          default:
            return state;
        }
      }