import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import BikeReducer from "../Reducers/bikeReducer";
import UserReducer from "../Reducers/userReducer";
import ReviewReducer from "../Reducers/reviewReducer";
import FavoriteReducer from "../Reducers/favouriteReducer";
import thunk from "redux-thunk";
const store = configureStore(
  {
    reducer: {
      user: UserReducer.reducer,
      bike: BikeReducer.reducer,
      review: ReviewReducer.reducer,
      favourite: FavoriteReducer.reducer,
    },
  },
  applyMiddleware(thunk)
);

export default store;
