import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  NewBikeData: {},
  AllBikeData: {},
  IndividualBikeData: {},
  BikeCreated: false,
  GotAllBikes: false,
  GotABike: false,
  loading: false,
  error: null,
  bikeDeleted: false,
};
const BikeReducer = createSlice({
  name: "Bike",
  initialState,
  reducers: {
    createBikeReducer(state, action) {
      const status = action.payload;
      if (status.type === "REGISTER_BIKE_REQUEST") {
        state.loading = true;
      } else if (status.type === "REGISTER_BIKE_SUCCESS") {
        state.loading = false;
        state.BikeCreated = true;
        state.NewBikeData = status.payload;
      } else if (status.type === "REGISTER_BIKE_FAIL") {
        state.loading = false;
        state.BikeCreated = false;
        state.error = status.payload;
      }
    },
    getAllBikesReducer(state, action) {
      const status = action.payload;
      if (status.type === "LOADING_ALL_BIKES") {
        status.loading = true;
      } else if (status.type === "BIKE_LOADING_SUCCESSFULL") {
        state.loading = false;
        state.GotAllBikes = true;
        state.AllBikeData = status.payload;
      } else if (status.type === "LOAD_ALL_BIKES_FAIL") {
        state.loading = false;
        state.GotAllBikes = false;
        state.error = status.payload;
      }
    },
    getABikeReducer(state, action) {
      const status = action.payload;
      if (status.type === "LOADING_A_BIKE") {
        state.loading = true;
      } else if (status.type === "BIKE_LOADING_SUCCESSFULL") {
        state.loading = false;
        state.GotABike = true;
        state.IndividualBikeData = status.payload;
      } else if (status.type === "LOAD_BIKE_FAIL") {
        state.loading = false;
        state.GotABike = false;
        state.error = status.payload;
      }
    },
    deleteABikeReducer(state, action) {
      const status = action.payload;
      if (status.type === "DELETE_BIKE_REQUEST") {
        state.loading = true;
      } else if (status.type === "DELETE_BIKE_REQUEST_SUCCESSFULL") {
        state.loading = false;
        state.bikeDeleted = true;
      } else if (status.type === "DELETE_BIKE_REQUEST_FAIL") {
        state.loading = false;
        state.bikeDeleted = false;
        state.error = status.payload;
      }
    },
  },
});

export const bikeActions = BikeReducer.actions;

export default BikeReducer;
