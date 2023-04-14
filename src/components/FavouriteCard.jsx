import React ,{useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteFavourite } from '../Actions/favouriteAction';
import { loaduser } from '../Actions/userAction';
const FavoriteCard=()=>{
  const dispatch=useDispatch();
    const {user}=useSelector((state)=>state.user);
    console.log(user);
    user.favourite.filter((data)=>{
      if(data.bikes===null){
        dispatch(deleteFavourite(data._id));
      }
    })
    const removeFavouriteHanler=(favouriteID)=>{
      dispatch(deleteFavourite(favouriteID));
      dispatch(loaduser());
    }
    console.log(user);
    // useEffect(()=>{
    //   user.favourite.map((data)=>{
    //     if(Object.keys(data.bikes).length===0 ||Object.keys(data.user).length===0){
    //       dispatch(deleteFavourite(data._id));
    //     }
    //   })
    // },[])

  return(
        <div>
          <Link to={'/'} >
        <div className=' flex content-end justify-start mr-8 m-4 ' >
        <button className=' text-white py-2 px-5 ml-3 text-center bg-[#22A1F5] border rounded-xl hover:scale-110 duration-300 border-blue-400'> Back to Home </button>
        </div>
        </Link>
    <h1 className='text-gray-600 flex justify-center font-bold font-[poppins] mt-8 mx-auto  text-xl  md:text-4xl ' id='bikes' > My Favourites</h1>
      <div className='container py-2 mx-2 flex flex-row flex-wrap items-center text-gray-600'  >
        
    
    <div className='container py-4 mx-2 flex flex-row flex-wrap justify-center items-center text-gray-600'  >
    {!(user.favourite.length === 0)?user.favourite.map((data) => (
      <div>{data.bikes===null?<div className="container flex justify-center w-full h-[300px]" ></div>:

      <div className="w-80 p-2 mx-4 bg-white border-2 border-gray-200 border-opacity-70 rounded-xl transform transition-all shadow-lg hover:shadow-2xl">
      <img
        className="h-40 object-cover w-full hover:scale-110 rounded-lg  md:h-48 object-center "
        src={data.bikes.image?.url}
        alt="bikeImg"
      />
      <div class="p-2 hover:bg-[#22A1F5] hover:text-white transition duration-300 ease-in">
        <h1 className=" text-lg font-semibold">
          Bike Name: {data.bikes.bikename}
        </h1>
        <h1 className=" text-lg mb-2 font-semibold mt-2 ">
          Location: {data.bikes.location}
        </h1>
        <h1 className=" text-lg font-semibold mt-2 ">
          Price: ̥ ₹{data.bikes.bikeprice}
        </h1>
      </div>
      <div className="m-2">
       <Link to={`/bikedetails/${data.bikes._id}`} key={data.bikes._id} >
                <button class="text-lg md:text-2xl bg-[#22A1F5] rounded-md text-white py-2 px-5 mt-4 hover:bg-zinc-800">
               Check Details
             </button>
             </Link> 
      </div>
      <div className="m-2">
                <button class="text-md md:text-xl bg-[red] rounded-lg text-white py-2 px-5 mt-4 hover:bg-zinc-800" onClick={(e)=>removeFavouriteHanler(e.target.value=data._id)} >
               Unfavourite
             </button>
     
      </div>
    </div>
      }
      </div>
        )):<div className="container flex justify-center w-full h-[300px]"  >No Favourite Added</div>}
        </div>
        </div></div>

)  

}
export default FavoriteCard;