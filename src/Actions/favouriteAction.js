import { async } from "@firebase/util";
import Axios from "../Axios";
import { favoriteAction } from "../Reducers/favouriteReducer";
import { toast } from "react-toastify";

export const createFavorite = (id) => async (dispatch) => {
  try {
    dispatch(
      favoriteAction.createFavoriteReducer({ type: "CREATE_FAVORITE_REQUEST" })
    );
    const token = JSON.parse(localStorage.getItem("user")).token;
    const favoritedata = null;
    const config = {
      headers: { Authorization: `Bearer ${token}`, withCredentials: true },
    };
    const { data } = await Axios.post(
      `/api/v1/easybikes/users/${id}/favorite`,
      favoritedata,
      config
    );
    console.log(data);
    if (data.status === true) {
      dispatch(
        favoriteAction.createFavoriteReducer({
          type: "CREATE_FAVORITE_SUCCESSFULL",
          payload: data.data.doc,
        })
      );
      toast.success("Added Favorite Successfully");
    }
  } catch (error) {
    console.log(error);
    dispatch(
      favoriteAction.createFavoriteReducer({
        type: "CREATE_FAVORITE_UNSUCCESSFULL",
        payload: error.response.data.message,
      })
    );
    toast.error("Something Went Wrong");
  }
};

export const deleteFavourite = (id) => async (dispatch) => {
  try {
    dispatch(
      favoriteAction.deleteFavouriteReducer({ type: "DELETE_FAVORITE_REQUEST" })
    );
    const token = JSON.parse(localStorage.getItem("user")).token;
    // const favoritedata = null;
    const config = {
      headers: { Authorization: `Bearer ${token}`, withCredentials: true },
    };
    const { data } = await Axios.delete(
      `/api/v1/easybikes/favorite/${id}`,
      config
    );
    console.log(data);
    if (data.status === true) {
      dispatch(
        favoriteAction.deleteFavouriteReducer({
          type: "DELETE_FAVORITE_SUCCESSFULL",
          payload: data.data.doc,
        })
      );
      toast.success("Unfavorite Successfully");
    }
  } catch (error) {
    console.log(error);
    dispatch(
      favoriteAction.deleteFavouriteReducer({
        type: "DELETE_FAVORITE_UNSUCCESSFULL",
        payload: error.response.data.message,
      })
    );
    // toast.error('Something went Wrong')
  }
};
