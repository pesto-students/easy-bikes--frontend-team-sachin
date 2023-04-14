import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import { getABike } from '../Actions/bikeAction';
import { createFavorite } from '../Actions/favouriteAction';
import CreateReview from './Review';
import myprofile from '../components/assets/myprofile.png'
import { deleteReview } from '../Actions/reviewAction';

const BikeDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { ReveiwCreated, loading } = useSelector((state) => state.review);

  const { IndividualBikeData, GotABike } = useSelector((state) => state.bike);

  useEffect(() => {
    dispatch(getABike(id));
  }, [GotABike,ReveiwCreated,loading]);

  // const deleteReviewHandler=(id)=>{
  //   dispatch(deleteReview(id));
  // };

  const favouriteHandler=()=>{
    dispatch(createFavorite(id));
    
  }
  return (
    <div>
      <Link to={'/'} >
        <div className=' flex content-end justify-start mr-8 m-4 ' >
        <button className=' text-white py-2 px-5 ml-3 text-center bg-[#22A1F5] border rounded-xl hover:scale-110 duration-300 border-blue-400'> Back to Home </button>
        </div>
        </Link>
      {GotABike && (
        <div className='flex flex-col m-8 sm:mb-4 sm:pt-4 justify-around items-center  content-center ml-6 lg:flex-row  lg:items-center mt-6 '>
        <div className='flex flex-col gap-4 md:max-w-sm max-w-md lg:w-1/2'>
            <img src={IndividualBikeData.image?.url} alt="" className='w-full h-full aspect-square object-cover rounded-xl'/>
        </div>
        <div className='flex flex-col gap-4 lg:w-2/4'>
            <div className=' flex flex-col mt-2 ' >
                <h1 className='text-4xl font-bold'>Bike Name: {IndividualBikeData.bikename}</h1>
                <h1 className= 'text-2xl font-bold mt-2'>Bike Details: </h1>
                <label htmlFor="text" className='font-bold'>Bike Brand: 
                <span className=' text-[#22A1F5] font-bold ml-2'>{IndividualBikeData.brand}</span>
                </label>
                <label htmlFor="text" className='font-bold'>Bike Year: 
                <span className=' text-[#22A1F5] font-bold ml-2'>{IndividualBikeData.year}</span>
                </label>
                <label htmlFor="text" className='font-bold'>Location : 
                <span className=' text-[#22A1F5] font-bold ml-2'> {IndividualBikeData.location}</span>
                </label>
                <label htmlFor="text" className='font-bold'>Bike Number: 
                <span className=' text-[#22A1F5] font-bold ml-2'>{IndividualBikeData.bikenumber}</span>
                </label>
                <h1 className='text-2xl font-bold mt-2'> Owner Details: </h1>
                <label htmlFor="text" className='font-bold'>Owner Name:
                <span className=' text-[#22A1F5] font-bold ml-2'> {IndividualBikeData.ownername}</span>
                </label>
                <label htmlFor="text" className='font-bold'>Owner Contact Number:
                <span className=' text-[#22A1F5] font-bold ml-2'> {IndividualBikeData.contactnumber}</span>
                </label>
            </div>
            <label htmlFor="text" className='font-bold'> Description:
            <p className='text-gray-700 border-cyan-100 ml-2'>
              {IndividualBikeData.description}
            </p>
            </label>
            <label htmlFor="text" className='font-bold'> Price :
            <h6 className='text-2xl font-semibold ml-2'> ₹ {IndividualBikeData.bikeprice}</h6>
            </label>
            <div className='flex flex-row items-center gap-8'>
                <button className='bg-[#22A1F5] text-white font-semibold py-3 px-10 rounded-xl h-full hover:scale-110 duration-300 border-blue-400' onClick={favouriteHandler}>Add Favorites</button>
            </div>
            <CreateReview  />
        </div>
    </div>
      )}
<div className="container my-20 px-6 mx-auto">

<div className="mb-32 text-gray-800 text-center">
  {ReveiwCreated ? <h2 className="text-3xl text-gray-800 font-bold mb-12">Reviews</h2>:<div></div>}
  <h2 className="text-3xl text-gray-800 font-bold mb-12">Reviews</h2>
  <div className="grid md:grid-cols-3 gap-x-6 lg:gap-x-12">
  {GotABike&&IndividualBikeData.reviews.map((data) => (
    
    <div className="mb-12 md:mb-0" key={data.id}>
      <div className="flex justify-center mb-6">
        <img src={myprofile} className="rounded-full shadow-lg w-32" />
      </div>
      <h5 className="text-lg font-bold mb-4 ">User: {data.user.name}</h5>
      <p className="mb-4 font-bold ">
      Review:  {data.review}
      </p>
      <p className="mb-4 font-bold" > Ratings: {data.rating}</p>
      {/* <button className=' text-white py-2 px-5 ml-3 text-center bg-[#22A1F5] border rounded-xl hover:scale-110 duration-300 border-blue-400' onClick={(e)=>deleteReviewHandler(e.target.value=data._id)}> Delete Review </button> */}
    </div>

  ))}
    </div>
</div>
</div>
    </div>
  )
}

export default BikeDetail
