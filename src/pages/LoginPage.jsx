import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login, onSocialLogin } from "../Actions/userAction";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebase.config"
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import GoogleButton from 'react-google-button';



const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();


const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { isAuthenticated } = useSelector((state) => state.user);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [googleLoading, setGoogleLoading] = useState(false);

  const loginSubmit = (e) => {
    e.preventDefault();
    const myForm = {
      email: loginEmail,
      password: loginPassword,
    };
    dispatch(login(myForm));
  };
  const guestlogin=()=>{
    const myGuest={
      email:'pesto@project.com',
      password:11111111,
    };
    dispatch(login(myGuest));
  }
  useEffect(() => {
    console.log(isAuthenticated);

    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, dispatch, navigate]);

  const signInWithGoogle = () => {
    setGoogleLoading(true)
    signInWithPopup(auth, provider)
        .then((result) => {
            let data = {
                name: result.user.displayName,
                email: result.user.email,
                mobileNumber: result.user.mobileNumber,
            }
            dispatch(
                onSocialLogin(
                    data,
                    (value) => setGoogleLoading(value),
                    navigate('/')
                )
            )
        })
        .catch((error) => {
            console.log(error);
        });
};

  return (
    <div className="border-red-500 min-h-screen my-8 flex items-center justify-center">
      <div className="bg-gray-100 my-6 p-5 flex rounded-2xl shadow-lg max-w-3xl border border-blue-300 ">
        <div className="  md:full  px-5 ">
          <h2 className="text-2xl font-bold text-[#002D74]">Login</h2>
          <p className=" text-am mt-4 text-[#002D74]">
            If you Have An Account, Please Login.
          </p>
          <form className="mt-6" method="POST" onSubmit={loginSubmit}>
            <div>
              <label className=" block text-gray-700 ">Email Address</label>
              <input
                type="email"
                name="email"
                id=""
                placeholder="Enter Your Email Address"
                value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
                className=" w-full px-4 py-3 rounded-lg bg-gray-200 border focus:border-blue-500 focus:bg-white focus:outline-none"
                autofocus
                autoComplete
                required
              />
            </div>
            <div className="mt-4">
              <label className=" block text-gray-700 ">Password</label>
              <input
                type="password"
                name="password"
                id=""
                placeholder="Enter Your Password"
                value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
                className=" w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg px-4 py-3 mt-6"
            >
              Log In
            </button>
          </form>
          <div className="mt-7 grid grid-cols-3 item-center text-gray-500">
            <hr className=" border-gray-500" />
            <p className="text-center text-sm">Or</p>
            <hr className=" border-gray-500" />
          </div>
          <button onClick={signInWithGoogle} className=" bg-white border py-2 w-full rounder-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300">
            <GoogleButton/>
          </button>
          <div className="text-sm flex justify-between items-center mt-3">
            <p>If you Don't Have Account...</p>
            <Link to={"/signup"}>
              <button className="py-2 px-5 ml-3 bg-white border rounded-xl hover:scale-110  hover:bg-[#22A1F5] hover:text-white duration-300 border-blue-400">
                Sign Up
              </button>
                 <button
              type="submit" onClick={guestlogin}
              className="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg px-4 py-3 mt-6"
            >
              Guest Login
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;


/*
const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  async function login(ev) {
    ev.preventDefault();
    const response = await fetch(
      "http://localhost:5000/api/v1/easybikes/users/login",
      {
        method: 'POST',
        body: JSON.stringify({email,password}),
        headers: { "Content-Type": "application/json" },
        credentials:'include',
      }
    );
    if (response.ok) {
      setRedirect(true);
    } else {
      alert("register failed, try again");
    }
  }
  if (redirect) {
    return <Navigate to={"/"} />;
  }
  */
