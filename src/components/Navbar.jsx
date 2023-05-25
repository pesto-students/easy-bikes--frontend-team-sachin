import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { loaduser } from "../Actions/userAction";
import { toast } from "react-toastify";
import logobike1 from "./assets/icons8-bike-96.png"


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch()

  const { isAuthenticated, user } = useSelector((state) => state.user);

  const loadUserData = () => {
    dispatch(loaduser());
  };

  function reloader(){
    window.location.href='/'
  }

  function logoutHandler(){
    localStorage.clear()
    window.location.href = "/"
    toast.success('Logged Out successfully')
  }
  return (
    <>
      <div className="shadow-md w-full rounded-lg border-2 border-gray-300 top-0 left-0">
        <div className="md:flex justify-between py-2 md:px-10 px-5">
          <div className=" font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
            <div className=" content-start  w-[20%]" >
            <img src={logobike1} alt="logobike" />
            </div>
            <Link to={"/"}>
              <h1 className="text-[#22A1F5] text-3xl font-bold cursor-pointer " onClick={reloader}>
                EasyBikes
              </h1>
            </Link>
          </div>
          <div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute right-8  top-6 cursor-pointer md:hidden"
          >
            {open ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
          </div>
          {isAuthenticated && (
            <ul
              className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
                open ? "top-20 opacity-100 z-[1] " : "top-[-490px]"
              } md:opacity-100 opacity-0 `}
              onClick={loadUserData}
              >
              <li className="md:ml-8 text-xl">
                <Link
                  to={"/myad"}
                  className="md:my-0 my-7  text-gray-800 hover:text-gray-400 duration-500"
                >
                  My Ads
                </Link>
              </li>
              <li className="md:ml-8 text-xl">
                <Link
                  to={"/favorite"}
                  className="md:my-0 my-7 text-gray-800 hover:text-gray-400 duration-500"
                  
                // onClick={favoriteHandler}
                >
                  My Favorites
                </Link>
              </li>
              <li className="md:ml-8 text-xl">
                <Link
                  to={"/my-profile"}  
                  className="md:my-0 my-7 text-gray-800 hover:text-gray-400 duration-500 font-bold"
                >{user.name}
                </Link>
              </li>
              <li className="md:ml-8 text-base ">
                <Link to={'/'} onClick={logoutHandler}>
                   <button className="md:my-0 my-7 py-2 px-5 ml-3 bg-white border rounded-xl hover:scale-110  hover:bg-[#22A1F5] hover:text-white duration-300 border-blue-400">
                   Logout
                  </button>
                </Link>
              </li>
            </ul>
          )}
            {!isAuthenticated && (
              <ul
              className={`md:flex md:items-center space-x-1 md:pb-0 pb-6 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
                open ? "top-20 opacity-100 z-[1] " : "top-[-490px]"
              } md:opacity-100 opacity-0 `}
            >
              <li className="md:ml-8  text-base  ">
                <Link to={"/login"}>
                  <button className="md:my-0 py-2 px-4 ml-1  font-bold  bg-white border rounded-xl hover:scale-110 hover:bg-[#22A1F5]  hover:text-white duration-300 border-blue-400 ">
                    Login
                  </button>
                </Link>
              </li>
              <li className="md:ml-8">
                <Link to={"/signup"}>
                  <button className="md:my-0  py-2 px-4 ml-3  font-bold  bg-white border rounded-xl hover:scale-110  hover:bg-[#22A1F5] hover:text-white duration-300 border-blue-400">
                    Sign up
                  </button>
                </Link>
              </li>
            </ul>
            ) }
        </div>
      </div>
    </>
  );
};

export default Navbar;


