import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { createBike, getBike } from "../Actions/bikeAction";
import { loaduser } from "../Actions/userAction";

const CreateBikePost = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { BikeCreated } = useSelector((state) => state.bike);

  const [bikename, setBikeName] = useState("");
  const [year, setYear] = useState("");
  const [ownername, setOwnerName] = useState("");
  const [contactnumber, setContactNumber] = useState("");
  const [brand, setBrand] = useState("");
  const [location, setLocation] = useState("");
  const [bikeprice, setBikePrice] = useState("");
  const [bikenumber, setBikeNumber] = useState("");
  const [description, setDescription] = useState("");
  const [bikeImg, setBikeImg] = useState("");

  const addBikeHandler = (e) => {
    e.preventDefault();
    const myBike = {
      bikename,
      year,
      ownername,
      contactnumber,
      brand,
      location,
      bikeprice,
      bikenumber,
      description,
      image: bikeImg,
    };
    dispatch(createBike(myBike));
  };
  useEffect(() => {
    if (BikeCreated) {
      dispatch(loaduser());
      navigate("/myad");
    }
  }, [BikeCreated]);

  const handleProductImageUpload = (e) => {
    const file = e.target.files[0];

    TransformFileData(file);
  };
  const TransformFileData = (file) => {
    const reader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setBikeImg(reader.result);
      };
    } else {
      setBikeImg("");
    }
  };

  return (
    <div className="min-h-screen ">
      <Link to={"/"}>
        <div className=" flex content-end justify-start mr-8 m-4 ">
          <button className=" text-white py-2 px-5 ml-3 text-center bg-[#22A1F5] border rounded-xl hover:scale-110 duration-300 border-blue-400">
            {" "}
            Back to Home{" "}
          </button>
        </div>
      </Link>
      <div className="container mx-auto">
        <div className="flex justify-start flex-col lg:flex-row w-10/12 lg:w-8/12 mt-4 bg-gray-100 rounded-xl mx-auto shadow-lg overflow-hidden">
          <div className="w-full py-16 px-12">
            <h2 className="text-3xl flex justify-center text-gray-600  font-bold mb-4">Post Your Bike Ad</h2>
            <form
              onSubmit={addBikeHandler}
              className="flex flex-col rounded flex-grow-1 flex-grow-0 mb-4 space-y-2 "
            >
              <div >
                <label className=" block text-gray-700 ">Add Bike Image</label>
                <input
                  type="file"
                  accept="image/*"
                  name="bikeimage"
                  onChange={handleProductImageUpload}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 border focus:border-blue-500 focus:bg-white focus:outline-none"
                  autofocus
                  autoComplete
            
                />
              </div>
              <div className="mt-4" >
                <label className=" block text-gray-700 ">Bike Name</label>
                <input
                  type="bikename"
                  name="bikename"
                  placeholder="Enter Your Bike Name"
                  onChange={(e) => setBikeName(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 border focus:border-blue-500 focus:bg-white focus:outline-none"
                  autofocus
                  autoComplete
            
                />
              </div>
              <div className="mt-4">
                <label className=" block text-gray-700 ">
                  Bike Purchase Year
                </label>
                <input
                  type="year"
                  name="year"
                  placeholder="Bike Purchase Year"
                  onChange={(e) => setYear(e.target.value)}
                  className=" w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                  required
                />
              </div>
              <div className="mt-4">
                <label className=" block text-gray-700 ">Owner Name</label>
                <input
                  type="ownername"
                  name="ownername"
                  placeholder="Owner-Name"
                  onChange={(e) => setOwnerName(e.target.value)}
                  required
                  className=" w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
              
                />
              </div>
              <div className="mt-4">
                <label className=" block text-gray-700 ">Contact Number</label>
                <input
                  type="number"
                  name="contactnumber"
                  placeholder="Contact-Number"
                  onChange={(e) => setContactNumber(e.target.value)}
                  required
                  className=" w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                
                />
              </div>
              <div className="mt-4">
                <label className=" block text-gray-700 ">Brand</label>
                <input
                  type="text"
                  name="brand"
                  placeholder="Brand"
                  onChange={(e) => setBrand(e.target.value)}
                  className=" w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                  required
                />
              </div>
              <div className="mt-4">
                <label className=" block text-gray-700 ">Location</label>
                <input
                  type="text"
                  name="location"
                  placeholder="Location"
                  onChange={(e) => setLocation(e.target.value)}
                  required
                  className=" w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                 
                />
              </div>
              <div className="mt-4">
                <label className=" block text-gray-700 ">Bike Price</label>
                <input
                  type="text"
                  name="bikeprice"
                  placeholder="Bike-Price"
                  onChange={(e) => setBikePrice(e.target.value)}
                  required
                  className=" w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
               
                />
              </div>
              <div className="mt-4">
                <label className=" block text-gray-700 ">Bike-Number</label>
                <input
                  type="text"
                  name="bikenumber"
                  placeholder="Bike-Number"
                  onChange={(e) => setBikeNumber(e.target.value)}
                  required
                  className=" w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                />
              </div>
              <div className="mt-4">
                <label className=" block text-gray-700 ">Description</label>
                <input
                  type="text"
                  name="description"
                  placeholder="Description"
                  onChange={(e) => setDescription(e.target.value)}
                  className=" w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                  required
                />
              </div>
              <div className=" flex justify-center py-4 ">
                <button class="text-lg md:text-xl bg-[#22A1F5] rounded-xl text-white py-2 px-5 hover:bg-zinc-800">
                  Post Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBikePost;

/*
<div className="mt-5">
                <input type="text" placeholder="Firstname" className="border border-gray-400 py-1 w-full" />
              </div>
              <div className="mt-5">
                <input type="text" placeholder="Email" className="border border-gray-400 py-1 px-2 w-full"/>
              </div>
              <div className="mt-5">
                <input type="password" placeholder="Password" className="border border-gray-400 py-1 px-2 w-full" />
              </div>
              <div className="mt-5">
                <input type="password" placeholder="Confirm Password" className="border border-gray-400 py-1 px-2 w-full" />
              </div>
              <div className="mt-5">
                <input type="checkbox" className="border border-gray-400" />
                <span>
                  I accept the <a href="#" className="text-purple-500 font-semibold">Terms of Use</a> &  <a href="#" className="text-purple-500 font-semibold">Privacy Policy</a> 
                </span>
              </div>
*/
