import React from "react";
import { Link } from "react-router-dom";
import { useSelector ,useDispatch} from "react-redux";
import { deleteABike } from "../Actions/bikeAction";
import { loaduser } from "../Actions/userAction";
import { deleteFavourite } from "../Actions/favouriteAction";
const MyAddCard=()=>{
  const dispatch=useDispatch();
    const {user}=useSelector((state)=>state.user);
    console.log(user.bikes.length);
    const deleteBikeHandler=(id)=>{
      user.favourite.map((data)=>{
        if(data.bikes.id===id){
          dispatch(deleteFavourite(data._id));

        }
      })
        dispatch(deleteABike(id));
        dispatch(loaduser());
    }
    

    return(<div>
     <Link to={'/'} >
        <div className=' flex content-end justify-start mr-8 m-4 ' >
        <button className=' text-white py-2 px-5 ml-3 text-center bg-[#22A1F5] border rounded-xl hover:scale-110 duration-300 border-blue-400'> Back to Home </button>
        </div>
        </Link>
        <h1 className='text-gray-600 flex justify-center font-bold font-[poppins] mt-8 mx-auto  text-xl  md:text-4xl ' id='bikes' >My Bikes</h1>
          <div className='container py-2 mx-2 flex flex-row flex-wrap items-center text-gray-600'  >
        <div className='container py-4 mx-2 flex flex-row flex-wrap justify-center items-center text-gray-600'  >
        {!(user.bikes.length === 0) ?user.bikes.map((data) => (
          
          <div className="w-80 p-2 mx-4 bg-white border-2 border-gray-200 border-opacity-70 rounded-xl transform transition-all shadow-lg hover:shadow-2xl">
      <img
        className="h-40 object-cover w-full hover:scale-110 rounded-lg  md:h-48 object-center "
        src={data.image?.url}
        alt="bikeImg"
      />
      <div class="p-2 hover:bg-[#22A1F5] hover:text-white transition duration-300 ease-in">
        <h1 className=" text-lg font-semibold">
          Bike Name: {data.bikename}
        </h1>
        <h1 className=" text-lg mb-2 font-semibold mt-2 ">
          Location: {data.location}
        </h1>
        <h1 className=" text-lg font-semibold mt-2 ">
          Price: ̥ ₹{data.bikeprice}
        </h1>
      </div>
          <div className="m-2">
           <Link to={`/bikedetails/${data._id}`} key={data._id} >
                    <button class="text-lg md:text-2xl bg-[#22A1F5] rounded-md text-white py-2 px-5 mt-4 hover:bg-zinc-800">
                   Check Details
                 </button>
                 </Link> 
          </div>
          <div className="m-2">
           {/* <Link to={`/bikedetails/${data._id}`} key={data._id} > */}
                    <button class="text-lg md:text-xl bg-[red] rounded-md text-white py-2 px-5 mt-4 hover:bg-zinc-800" onClick={(e)=>deleteBikeHandler(e.target.value=data._id)}>
                   Delete
                 </button>
                 {/* </Link>  */}
          </div>
        </div>
            )):<div className="container flex justify-center w-full h-[300px] " >No Bikes Added </div>}
            </div>
            </div></div>)
}

export default MyAddCard