import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createReview, deleteReview } from "../Actions/reviewAction";
const CreateReview = () => {
  const { IndividualBikeData, GotABike } = useSelector((state) => state.bike);

  const { ReveiwCreated, loading } = useSelector((state) => state.review);

  const dispatch = useDispatch();
  const [review, setReview] = useState("");
  const [rating, setRating] = useState("");
  const { id } = useParams();
  console.log(IndividualBikeData);
  const reviewSubmitHandler = (e) => {
    const reviewData = { review, rating };
    e.preventDefault();
    dispatch(createReview(id, reviewData));
  };
  useEffect(() => {
    IndividualBikeData.reviews.map((data) => {
      if (data.bikes === null || Object.keys(data.user).length === 0) {
        dispatch(deleteReview(data._id));
      }
    });
  }, []);
  const deleteReviewHandler = (id) => {
    dispatch(deleteReview(id));
  };
  return (
    <>
      <div>
        <div>
          <div>
            <form className="flex flex-col" onSubmit={reviewSubmitHandler}>
              <label htmlFor="text" className=" font-bold">
                Post Your Review:
              </label>
                <input
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                  className=" w-[70%] px-4 py-3 rounded-lg bg-gray-200 border focus:border-blue-500 focus:bg-white focus:outline-none mt-2 ml-2"
                  type="float"
                />
              
              <label htmlFor="text" className="font-bold">
                Post Ratings:
                </label>
                <input
          type="range"
          min={0}
          max={5}
          onChange={(e) => setRating(e.target.value)}
          className=" ml-4 mt-2  w-[30%] bg-gray border"
        ></input>
              
              <button className=" w-[25%]  mt-2 text-white py-2 px-5 ml-3 text-center bg-[#22A1F5] border rounded-xl hover:scale-110 duration-300 border-blue-400">
                {" "}
                Post Review{" "}
              </button>
              {/* <h2>Post Your Reviews</h2>
        <input
          type="float"
          value={review}
          onChange={(e) => setReview(e.target.value)}
          className=" bg-gray border"
        ></input>
        <input
          type="range"
          min={0}
          max={5}
          onChange={(e) => setRating(e.target.value)}
          className=" bg-gray border"
        ></input>
        <button className=' text-white py-2 px-5 ml-3 text-center bg-[#22A1F5] border rounded-xl hover:scale-110 duration-300 border-blue-400'> Post </button> */}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateReview;
