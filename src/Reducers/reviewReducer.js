import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  loading: false,
  ReveiwCreated: false,
  ReviewData: {},
  error: null,
  ReviewDeleted: false,
};
const ReviewReducer = createSlice({
  name: "Reveiw",
  initialState,
  reducers: {
    createReviewReducer(state, action) {
      const status = action.payload;
      if (status.type === "CREATE_REVIEW_REQUEST") {
        state.loading = true;
      } else if (status.type === "CREATE_REVIEW_SUCCESSFULL") {
        state.loading = false;
        state.ReveiwCreated = true;
        state.ReviewData = status.payload;
      } else if (status.type === "CREATE_REVIEW_UNSUCCESSFULL") {
        state.loading = false;
        state.ReveiwCreated = false;
        state.error = status.payload;
      }
    },
    deleteReviewReducer(state, action) {
      const status = action.payload;
      if (status.type === "DELETE_REVIEW_REQUEST") {
        state.loading = true;
      } else if (status.type === "DELETE_REVIEW_SUCCESSFULL") {
        state.loading = false;
        state.ReviewDeleted = true;
      } else if (status.type === "DELETE_REVIEW_UNSUCCESSFULL") {
        state.loading = false;
        state.ReviewDeleted = false;
        state.error = status.payload;
      }
    },
  },
});

export const reviewAction = ReviewReducer.actions;
export default ReviewReducer;
