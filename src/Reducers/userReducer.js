import { createSlice } from "@reduxjs/toolkit";
// import { act } from "react-dom/test-utils";

const initialState = {
  user: {},
  loading: false,
  isAuthenticated: false,
  error: null,
  userDeleted: false,
  passwordUpdate: false,
};
const UserReducer = createSlice({
  name: "Users",
  initialState,
  reducers: {
    userReducer(state, action) {
      const status = action.payload; //status.payload,action.payload.payload
      if (
        status.type === "REGISTER_USER_REQUEST" ||
        status.type === "LOGIN_REQUEST" ||
        status.type === "LOAD_USER_REQUEST" ||
        status.type === "UPDATE_USER_REQUEST"
      ) {
        state.loading = true;
      } else if (
        status.type === "REGISTER_USER_SUCCESS" ||
        status.type === "LOGIN_SUCCESS" ||
        status.type === "LOAD_USER_SUCCESS" ||
        status.type === "UPDATE_USER_SUCCESS"
      ) {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = status.payload;
      } else if (
        status.type === "REGISTER_USER_FAIL" ||
        status.type === "LOGIN_FAIL" ||
        status.type === "UPDATE_USER_FAIL"
      ) {
        state.loading = false;
        state.isAuthenticated = false;
        state.error = status.payload;
      } else if (status.type === "LOAD_USER_FAIL") {
        state.loading = false;
        state.isAuthenticated = false;
        state.user = null;
        state.error = status.payload;
      }
    },
    deleteUser(state, action) {
      const status = action.payload;
      if (status.type === "DELETE_USER_REQUEST") {
        state.loading = true;
      } else if (status.type === "DELETE_USER_SUCCESS") {
        state.loading = false;
        state.userDeleted = true;
      } else if (status.type === "DELETE_USER_FAIL") {
        state.loading = false;
        state.userDeleted = false;
        state.error = status.payload;
      }
    },
    updateUserPassword(state, action) {
      const status = action.payload;
      if (status.type === "UPDATE_USER_PASSWORD_REQUEST") {
        state.loading = true;
      } else if (status.type === "UPDATE_USER_PASSWORD_SUCCESS") {
        state.loading = false;
        state.passwordUpdate = true;
      } else if (status.type === "UPDATE_USER_PASSWORD_FAIL") {
        state.loading = false;
        state.passwordUpdate = false;
        state.error = status.payload;
      }
    },
  },
});

export const userActions = UserReducer.actions;

export default UserReducer;
