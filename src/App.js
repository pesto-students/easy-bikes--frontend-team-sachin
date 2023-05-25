import React from "react";
import { Route, Routes } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Layout from "./components/Layout";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import BikeDetailPage from "./pages/BikeDetailPage";
import CreateBikePost from "./components/CreateBikePost";
import MyAdPage from "./pages/MyAdPage";
import FavoritePage from "./pages/FavoritePage";
import MyProfile from "./components/Profile/MyProfile";
import GuestLogin from "./pages/GuestLogin";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loaduser } from "./Actions/userAction";
import Notfound from "./components/Notfound";
import ChangePassword from "./components/Profile/ChangePassword";

function App() {
  const dispatch = useDispatch();
  const { user, loading, isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("user"));
    if (storedData && storedData.token) {
      dispatch(loaduser());
    }
  }, [loaduser]);

  return (
    <Routes>
      <Route path={"/"} element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path={`/search/:keyword`} element={<LandingPage />} />
        {/* <Route path="/search/:keyword" element={<LandingPage />}/> */}
        <Route path={"/login"} element={<LoginPage />} />
        <Route path={"/signup"} element={<RegisterPage />} />
        {/* {isAuthenticated && (
        <> */}
        <Route path={"/createbikepost"} element={<CreateBikePost />} />
        <Route path={"/my-profile"} element={<MyProfile />} />
        {/* <Route path="/updateme" component={<UpdateProfile/>} /> */}
        <Route path={"/myad"} element={<MyAdPage />} />
        <Route path={"/favorite"} element={<FavoritePage />} />
        <Route path={`/bikedetails/:id`} element={<BikeDetailPage />} />
        {/* </>
        )} */}
        <Route path={"/profile/change-password"} element={<ChangePassword />} />
        <Route path={"/guestlogin"} element={<GuestLogin />} />
        <Route path="*" element={<Notfound />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
