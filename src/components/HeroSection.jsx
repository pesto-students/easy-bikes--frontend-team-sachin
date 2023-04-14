import React from "react";
import { Link } from "react-router-dom";
import SearchBike from "./SearchBike";
import {  useSelector } from "react-redux";


const HeroSection = () => {

  const { isAuthenticated } = useSelector((state) => state.user);

  return (
      <div className="px-3 py-5 pt-4 bg-slate-500 lg:py-18 bg-image w-full ">
        <div className=' flex content-end justify-center mr-8  m-4 ' >
        <SearchBike/>
        {isAuthenticated && (
          <Link to={'/createbikepost'} >
          <button className=' text-white py-2 px-5 ml-3 text-center bg-[#22A1F5] border rounded-xl hover:scale-110 duration-300 border-blue-400'> + Sell Now </button>
          </Link>
        )}
        {!isAuthenticated && (
          <Link to={'/login'} >
          <button className=' text-white py-2 px-5 ml-3 text-center bg-[#22A1F5] border rounded-xl hover:scale-110 duration-300 border-blue-400'> + Sell Now </button>
          </Link>
        )}
        
        </div>
        
        <div className="flex w-full  justify-center items-center ">
          <div className="  order-2 lg:order-1 lg:w-[500px] lg:h-[500px] flex flex-col justify-center items-center">
            <p className="text-3xl font-bold md:text-5xl text-white">GET YOUR FIRST BIKE </p>
            <p className="mt-2 text-sm md:text-3xl text-orange">On your choice Location!</p>
            <a href="#bikes"> 
            <button className="text-lg md:text-2xl bg-[#22A1F5] rounded-xl text-black py-2 px-5 mt-10 hover:bg-white">
              Explore
            </button>
            </a>
          </div>
          {/* <div class="order-1 lg:order-2">
            <img class="h-80 w-80 object-cover lg:w-[500px] lg:h-[500px] " src={Hero} alt="bike image" />
        </div> */}
        </div>
      </div>
    
  )
};

export default HeroSection;
