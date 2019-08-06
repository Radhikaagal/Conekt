import {
    LOGIN_SUCCESS,
    LOGIN_FAIL}
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
            localStorage.setItem('token', payload.data.userToken);
            return {
              ...state,
              ...payload,
              isAuthenticated: true,
              loading: false
            };
          
          case AUTH_ERROR:
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