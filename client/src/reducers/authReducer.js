//import { SET_CURRENT_USER, USER_LOADING } from "../actions/types";

const isEmpty = require("is-empty");

export const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
  loading: false
};

export function AuthReducer(initialState, action) {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        ...initialState,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    case "USER_LOADING":
      console.log("userloading from reducer")
      return {
        ...initialState,
        loading: true
      };
    case "GRAB_USER_DATA":
      return {
        ...initialState,
        isAuthenticated: true,
        token: action.payload.token,
        loading: false
      }
    case "LOGIN":
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("token", action.payload.token);
      return {
          ...initialState,
          isAuthenticated: true,
          user: action.payload.user,
          token: action.payload.token,
          loading: false
      };
    case "LOGOUT":
        localStorage.clear();
        return {
            ...initialState,
            isAuthenticated: false,
            user: null,
            token: null
        };
    default:
      return initialState;
  }
}
