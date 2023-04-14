import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  loading: false,
  FavoriteCreated: false,
  FavoriteData: {},
  error: null,
};
const FavoriteReducer = createSlice({
  name: "Favorite",
  initialState,
  reducers: {
    createFavoriteReducer(state, action) {
      const status = action.payload;
      if (status.type === "CREATE_FAVORITE_REQUEST") {
        state.loading = true;
      } else if (status.type === "CREATE_FAVORITE_SUCCESSFULL") {
        state.loading = false;
        state.FavoriteCreated = true;
        state.FavoriteData = status.payload;
      } else if (status.type === "CREATE_FAVORITE_UNSUCCESSFULL") {
        state.loading = false;
        state.FavoriteCreated = false;
        state.error = status.payload;
      }
    },
    deleteFavouriteReducer(state, action) {
      const status = action.payload;
      if (status.type === "DELETE_FAVORITE_REQUEST") {
        state.loading = true;
      } else if (status.type === "DELETE_FAVORITE_SUCCESSFULL") {
        state.loading = false;
        state.FavoriteCreated = true;
        state.FavoriteData = status.payload;
      } else if (status.type === "DELETE_FAVORITE_UNSUCCESSFULL") {
        state.loading = false;
        state.FavoriteCreated = false;
        state.error = status.payload;
      }
    },
  },
});

export const favoriteAction = FavoriteReducer.actions;
export default FavoriteReducer;
