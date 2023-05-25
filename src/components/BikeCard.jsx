import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const BikeCard = () => {
  const { isAuthenticated } = useSelector((state) => state.user);
  const { AllBikeData } = useSelector((state) => state.bike);

  return (
    <>
      <Link to={"/"}>
        <h1
          className="text-gray-600 flex justify-center font-bold font-[poppins] mt-8 mx-auto  text-xl  md:text-3xl "
          id="bikes"
        >
          {" "}
          Popular Bikes
        </h1>
      </Link>
      <div className="container py-4 mx-2 flex flex-row flex-wrap justify-center items-center text-gray-600">
        {AllBikeData.map((bikes) => (
          <div className="p-4">
            <div className="w-80 p-2 mx-4 bg-white border-2 border-gray-200 border-opacity-70 rounded-xl transform transition-all shadow-lg hover:shadow-2xl">
              <img
                className="h-40 object-cover w-full hover:scale-110 rounded-lg  md:h-48 object-center "
                src={bikes.image?.url}
                alt="bikeImg"
              />
              <div class="p-2 hover:bg-[#22A1F5] hover:text-white transition duration-300 ease-in">
                <h1 className=" text-lg font-semibold">
                  Bike Name: {bikes.bikename}{" "}
                </h1>
                <h1 className=" text-lg mb-2 font-semibold mt-2 ">
                  Location: {bikes.location}{" "}
                </h1>
                <h1 className=" text-lg font-semibold mt-2 ">
                  Price: ̥ ₹{bikes.bikeprice}{" "}
                </h1>
              </div>
              <div className="m-2">
                {isAuthenticated ? (
                  <Link to={`/bikedetails/${bikes._id}`} key={bikes._id}>
                    <button class="text-lg md:text-2xl bg-[#22A1F5] rounded-md text-white py-2 px-5 mt-4 hover:bg-zinc-800">
                      Check Details
                    </button>
                  </Link>
                ) : (
                  <Link to={"/login"}>
                    <button class="text-lg md:text-2xl bg-[#22A1F5] rounded-md text-white py-2 px-5 mt-4 hover:bg-zinc-800">
                      Check Details
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BikeCard;
