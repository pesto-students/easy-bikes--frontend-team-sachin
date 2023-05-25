import { userActions } from "../Reducers/userReducer";
import Axios from "../Axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

//SIGNUP
export const signup = (userData) => {
  return async (dispatch) => {
    try {
      dispatch(userActions.userReducer({ type: "REGISTER_USER_REQUEST" }));

      const config = { headers: { "Content-Type": "application/json" } };

      const { data } = await Axios.post(
        "/api/v1/easybikes/users/signup",
        userData,
        config
      );

      if (data.status === true) {
        localStorage.setItem("user", JSON.stringify({ token: data.token }));
        dispatch(
          userActions.userReducer({
            type: "REGISTER_USER_SUCCESS",
            payload: data.data.user,
          })
        );
        toast.success("Register Successful");
      }
    } catch (error) {
      dispatch(
        userActions.userReducer({
          type: "REGISTER_USER_FAIL",
          payload: error.response.data.message,
        })
      );
      toast.error("Register failed, Try Again");
    }
  };
};

//  LOGIN
export const login = (userData) => async (dispatch) => {
  try {
    dispatch(userActions.userReducer({ type: "LOGIN_REQUEST" }));

    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await Axios.post(
      "/api/v1/easybikes/users/login",
      userData,
      config
    );

    if (data.status === true) {
      localStorage.setItem("user", JSON.stringify({ token: data.token }));
      dispatch(
        userActions.userReducer({
          type: "LOGIN_SUCCESS",
          payload: data.data.user,
        })
      );
      toast.success("Login success");
    }
  } catch (error) {
    dispatch(
      userActions.userReducer({
        type: "LOGIN_FAIL",
        payload: error.response.data.message,
      })
    );
    toast.error("Login Fail, Try again");
  }
};

// SOCIAL LOGIN
export const onSocialLogin = (userData) => async (dispatch) => {
  try {
    dispatch(userActions.userReducer({ type: "LOGIN_REQUEST" }));

    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await Axios.post(
      "/api/v1/easybikes/users/social-login",
      userData,
      config
    );

    if (data.status === true) {
      localStorage.setItem("user", JSON.stringify({ token: data.token }));
      dispatch(
        userActions.userReducer({
          type: "LOGIN_SUCCESS",
          payload: data.data.user,
        })
      );
      toast.success("Login Successful");
    }
  } catch (error) {
    dispatch(
      userActions.userReducer({
        type: "LOGIN_FAIL",
        payload: error.response.data.message,
      })
    );
    toast.error("Login Fail, Try again");
  }
};

// Load User On Web

// export const updateMe = (userData) => async (dispatch) => {
//   try {
//     dispatch(userActions.userReducer({ type: "UPDATE_USER_REQUEST" }));
//     const token = JSON.parse(localStorage.getItem("user")).token;
//     const config = {
//       headers: { Authorization: `Bearer ${token}`, withCredentials: true },
//     };
//     const { data } = await Axios.patch(
//       "/api/v1/easybikes/users/updateMe",
//       userData,
//       config
//     );
//     if (data.status === true) {
//       console.log(data);
//       dispatch(
//         userActions.userReducer({
//           type: "UPDATE_USER_SUCCESS",
//           payload: data.data.doc,
//         })
//       );
//       toast.success("Profile Updated Successfully")
//     }
//   } catch (error) {
//     console.log(error);
//     dispatch(
//       userActions.userReducer({
//         type: "UPDATE_USER_FAIL",
//         payload: error.response.data.message,
//       })
//     );
//     toast.error("Try again")
//   }
// };

export const loaduser = () => async (dispatch) => {
  try {
    dispatch(userActions.userReducer({ type: "LOAD_USER_REQUEST" }));
    const token = JSON.parse(localStorage.getItem("user")).token;
    const config = {
      headers: { Authorization: `Bearer ${token}`, withCredentials: true },
    };
    const { data } = await Axios.get("/api/v1/easybikes/users/me", config);
    if (data.status === true) {
      console.log(data);
      dispatch(
        userActions.userReducer({
          type: "LOAD_USER_SUCCESS",
          payload: data.data.doc,
        })
      );
    }
  } catch (error) {
    console.log(error);
    dispatch(
      userActions.userReducer({
        type: "LOAD_USER_FAIL",
        payload: error.response.data.message,
      })
    );
    toast.error("Try again with credentials");
  }
};

export const updateUser = (userData) => async (dispatch) => {
  try {
    console.log(userData);
    dispatch(userActions.userReducer({ type: "UPDATE_USER_REQUEST" }));
    const token = JSON.parse(localStorage.getItem("user")).token;
    const config = {
      headers: { Authorization: `Bearer ${token}`, withCredentials: true },
    };
    const { data } = await Axios.patch(
      "/api/v1/easybikes/users/updateMe",
      userData,
      config
    );
    if (data.status === true) {
      console.log(data);
      dispatch(
        userActions.userReducer({
          type: "UPDATE_USER_SUCCESS",
          payload: data.data.doc,
        })
      );
    }
  } catch (error) {
    console.log(error);
    dispatch(
      userActions.userReducer({
        type: "UPDATE_USER_FAIL",
        payload: error.response.data.message,
      })
    );
    toast.error("Try again with credentials");
  }
};

export const deleteUser = () => async (dispatch) => {
  try {
    dispatch(userActions.userReducer({ type: "DELETE_USER_REQUEST" }));
    const token = JSON.parse(localStorage.getItem("user")).token;
    const config = {
      headers: { Authorization: `Bearer ${token}`, withCredentials: true },
    };
    const data = await Axios.delete("/api/v1/easybikes/users/deleteMe", config);
    console.log(data);

    if (data.status === 204) {
      localStorage.clear();
      console.log(data);
      // window.location.href = "/";s
      dispatch(
        userActions.userReducer({
          type: "DELETE_USER_SUCCESS",
        })
      );
      toast.success("Delete User successfully");
    }
  } catch (error) {
    console.log(error);
    dispatch(
      userActions.userReducer({
        type: "DELETE_USER_FAIL",
        payload: error.response.data.message,
      })
    );
    toast.error("Try again with credentials");
  }
};

export const updateUserPassword = (passwordData) => async (dispatch) => {
  // const navigate = useNavigate();
  try {
    dispatch(userActions.userReducer({ type: "UPDATE_USER_PASSWORD_REQUEST" }));
    const token = JSON.parse(localStorage.getItem("user")).token;
    const config = {
      headers: { Authorization: `Bearer ${token}`, withCredentials: true },
    };
    const { data } = await Axios.patch(
      "/api/v1/easybikes/users/updatePassword",
      passwordData,
      config
    );
    console.log(data);

    if (data.status === true) {
      localStorage.clear();
      console.log(data);
      // window.location.href = "/";s
      dispatch(
        userActions.userReducer({
          type: "UPDATE_USER_PASSWORD_SUCCESS",
        })
      );
      toast.success("update user password successfully");
      // navigate("/");
      window.location.href = "/";
    }
  } catch (error) {
    console.log(error);
    dispatch(
      userActions.userReducer({
        type: "UPDATE_USER_PASSWORD_FAIL",
        payload: error.response.data.message,
      })
    );
    toast.error("Try again with credentials");
  }
};
