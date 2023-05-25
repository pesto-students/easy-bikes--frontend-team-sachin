import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import myprofile from '../assets/myprofile.png'
import { updateUser } from '../../Actions/userAction';

const MyProfile = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [values, setValues] = useState({})
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)
    const [updateState, setUpdateState] = useState(false)
    const { user} = useSelector((state) => state.user);

    useEffect(() => {

        if (user) {
            setIsUserLoggedIn(true)
            setValues(
                {
                    name: user.name,
                    email: user.email,
                    mobileNumber: user.mobileNumber
                }
            )
        }
      if (user === false) {
        navigate('/')
      }
    }, [navigate, user]);

    const onInputChange = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    };

    const onUpdateHandler = (e) => {
        e.preventDefault();
        const data = {
            ...values
        }
        setUpdateState(!updateState);
        dispatch(
            updateUser(data)
        )
    }
    const changeStateHandler=()=>{
        setUpdateState(!updateState);
    }
  return (
    <div>
        <Link to={'/'} >
        <div className=' flex content-end justify-start mr-8 m-4 ' >
        <button className=' text-white py-2 px-5 ml-3 text-center bg-[#22A1F5] border rounded-xl hover:scale-110 duration-300 border-blue-400'> Back to Home </button>
        </div>
        </Link>
    <div className="flex justify-evenly  mt-12  ">
        <text className="text-2xl font-bold">My Profile</text>
        <button className=' text-white py-2 px-5 ml-3 text-center bg-[#22A1F5] border rounded-xl hover:scale-110 duration-300 border-blue-400' 
        onClick={() => setUpdateState(!updateState)}  > Update Profile </button>
    </div>
    <div className="flex items-center shadow-new justify-center p-10 rounded fade-in-bottom">
    <img className='w-[220px] h-[220px]' src={myprofile} alt={user} />
        {updateState ? <div className="ml-20 justify-center ">
            <form className='flex flex-col mt-6 border  space-y-2 ' onSubmit={(e)=>onUpdateHandler(e)}>
                <input
                    type="text"
                    label={"Name"}
                    name="name"
                    value={values.name}
                    placeholder='Enter Name'
                    onChange={onInputChange}
                    required
                />
                <input
                    type="email"
                    label={"Email"}
                    name={"email"}
                    value={values.email}
                    placeholder='Enter Email'
                    onChange={onInputChange}
                    required
                />
                <input
                    type="text"
                    label={"Mobile Number"}
                    name={"mobileNumber"}
                    value={values.mobileNumber}
                    placeholder='Enter Mobile Number'
                    onChange={onInputChange}
                    required
                />
                <div className="flex mt-8 ">
                <button type='submit' className='text-white py-2 px-5 ml-3 text-center bg-[#22A1F5] border rounded-xl hover:scale-110 duration-300 border-blue-400' > Submit </button>
                <button  className='text-white py-2 px-5 ml-3 text-center bg-[#22A1F5] border rounded-xl hover:scale-110 duration-300 border-blue-400' onClick={changeStateHandler} > Cancel </button>
                </div>
            </form>
        </div> :
            <div className="ml-20">

                <div className="mb-5">
                    <label className='font-bold'>Name</label>
                    <p>{user.name}</p>
                </div>

                <div className="mb-5">
                    <label className='font-bold'>Email</label>
                    <p>{user.email}</p>
                </div>

                <div className="mb-5">
                    <label className='font-bold'>Mobile Number</label>
                    <p>{user.mobileNumber}</p>
                </div>
               
                <Link to="/profile/change-password">
                <button className=' text-white py-2 px-5 ml-3 text-center bg-[#22A1F5] border rounded-xl hover:scale-110 duration-300 border-blue-400'> Change Password </button>
                </Link>
            </div>
          }  
             </div>
</div>

  )
}

export default MyProfile
