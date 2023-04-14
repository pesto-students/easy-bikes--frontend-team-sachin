import { toast } from "react-toastify";
import Axios from "../Axios";
import { bikeActions } from "../Reducers/bikeReducer";

export const createBike = (bikeData) => async (dispatch) => {
  try {
    dispatch(bikeActions.createBikeReducer({ type: "REGISTER_BIKE_REQUEST" }));
    const token = JSON.parse(localStorage.getItem("user")).token;
    const config = {
      headers: { Authorization: `Bearer ${token}`, withCredentials: true },
    };
    const { data } = await Axios.post(
      "/api/v1/easybikes/bikes/",
      bikeData,
      config
    );

    if (data.status === true) {
      dispatch(
        bikeActions.createBikeReducer({
          type: "REGISTER_BIKE_SUCCESS",
          payload: data.data.data,
        })
      );
      toast.success("Bike Posted Successfully");
    } else {
      toast.error("Something Went Wrong");
    }
  } catch (error) {
    dispatch(
      bikeActions.createBikeReducer({
        type: "REGISTER_BIKE_FAIL",
        payload: error.response.data.message,
      })
    );
  }
};

export const getBike = (keyword = '') => async (dispatch) => {
  try {
    dispatch(bikeActions.getAllBikesReducer({ type: "LOADING_ALL_BIKES" }));

    const { data } = await Axios.get(
      `/api/v1/easybikes/bikes?keyword=${keyword}`
    );

    if (data.status === true) {
      dispatch(
        bikeActions.getAllBikesReducer({
          type: "BIKE_LOADING_SUCCESSFULL",
          payload: data.data.data,
        })
      );
    }
  } catch (error) {
    console.log(error);
    dispatch(
      bikeActions.getAllBikesReducer({
        type: "LOAD_ALL_BIKES_FAIL",
        payload: error.response.data.message,
      })
    );
  }
};

export const getABike = (id) => async (dispatch) => {
  try {
    dispatch(bikeActions.getABikeReducer({ type: "LOADING_A_BIKE" }));
    const token = JSON.parse(localStorage.getItem("user")).token;
    const config = {
      headers: { Authorization: `Bearer ${token}`, withCredentials: true },
    };
    const { data } = await Axios.get(`/api/v1/easybikes/bikes/${id}`, config);

    if (data.status === true) {
      dispatch(
        bikeActions.getABikeReducer({
          type: "BIKE_LOADING_SUCCESSFULL",
          payload: data.data.doc,
        })
      );
    }
  } catch (error) {
    dispatch(
      bikeActions.getABikeReducer({
        type: "LOAD_BIKE_FAIL",
        payload: error.response.data.message,
      })
    );
  }
};

export const deleteABike = (id) => async (dispatch) => {
  try {
    dispatch(bikeActions.deleteABikeReducer({ type: "DELETE_BIKE_REQUEST" }));

    const token = JSON.parse(localStorage.getItem("user")).token;
    const config = {
      headers: { Authorization: `Bearer ${token}`, withCredentials: true },
    };
    const { data } = await Axios.delete(
      `/api/v1/easybikes/bikes/${id}`,
      config
    );

    if (data.status === true) {
      dispatch(
        bikeActions.deleteABikeReducer({
          type: "DELETE_BIKE_REQUEST_SUCCESSFULL",
        })
      );
      toast.success('Deleted Bike Success')
    }
  } catch (error) {
    dispatch(
      bikeActions.deleteABikeReducer({
        type: "DELETE_BIKE_REQUEST_FAIL",
        payload: error.response.data.message,
      })
    );
    toast.error('Something Went Wrong')
  }
};
