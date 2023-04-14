import Axios from "./../Axios";
import { reviewAction } from "../Reducers/reviewReducer";

export const createReview = (id, reviewData) => async (dispatch) => {
  try {
    dispatch(
      reviewAction.createReviewReducer({ type: "CREATE_REVIEW_REQUEST" })
    );
    const token = JSON.parse(localStorage.getItem("user")).token;
    // const config = {
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //     withCredentials: true,
    //   },
    // };
    const { data } = await Axios.post(
      `/api/v1/easybikes/bikes/${id}/reviews`,
      reviewData,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          withCredentials: true,
        },
      }
    );
    if (data.status === true) {
      dispatch(
        reviewAction.createReviewReducer({
          type: "CREATE_REVIEW_SUCCESSFULL",
          payload: data.data.data,
        })
      );
    }
  } catch (error) {
    console.log(error);
    dispatch(
      reviewAction.createReviewReducer({
        type: "CREATE_REVIEW_UNSUCCESSFULL",
        payload: error.response.data.message,
      })
    );
  }
};

export const deleteReview = (id) => async (dispatch) => {
  try {
    dispatch(
      reviewAction.deleteReviewReducer({ type: "DELETE_REVIEW_REQUEST" })
    );
    console.log(id);
    const token = JSON.parse(localStorage.getItem("user")).token;
    const { data } = await Axios.delete(`/api/v1/easybikes/reviews/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        withCredentials: true,
      },
    });
    if (data.status === true) {
      console.log(data);
      dispatch(
        reviewAction.deleteReviewReducer({
          type: "DELETE_REVIEW_SUCCESSFULL",
        })
      );
    }
  } catch (error) {
    console.log(error);
    dispatch(
      reviewAction.deleteReviewReducer({
        type: "DELETE_REVIEW_UNSUCCESSFULL",
        payload: error.response.data.message,
      })
    );
  }
};
