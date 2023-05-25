import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { onSocialLogin, signup } from "../Actions/userAction";
import { toast } from 'react-toastify';
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebase.config"
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import GoogleButton from 'react-google-button';


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { isAuthenticated } = useSelector((state) => state.user);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [googleLoading, setGoogleLoading] = useState(false);


  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate, dispatch]);

  const formHandler = (e) => {
    e.preventDefault();

    if (password.length <= 5) {
      toast.error("Password must be at least 8 characters.");
      return false;
  }

  if (password !== passwordConfirm) {
      toast.error("Password should be same!");
      return false;
  }
    const myForm = {
      name: name,
      email: email,
      mobileNumber: mobileNumber,
      password: password,
      passwordConfirm: passwordConfirm,
    };
    dispatch(signup(myForm));
  };


  const signInWithGoogle = () => {
    setGoogleLoading(true)
    signInWithPopup(auth, provider)
        .then((result) => {
            let data = {
                name: result.user.displayName,
                email: result.user.email,
                phoneNumber: result.user.phoneNumber,
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
            toast.error('try again')
        });
};



  return (
    <div className='border-red-500 min-h-screen my-8 flex items-center justify-center'  >
      <div className='bg-gray-100 my-6 p-5 flex rounded-2xl shadow-lg max-w-3xl border border-blue-300 ' >
        <div className='md:w-full px-5 '>
            <h2 className='text-2xl font-bold text-[#002D74]'>Sign Up</h2>
        <form className='mt-6'
             encType="multipart/form-data" onSubmit={formHandler}  >
        <div>
        <label className=' block text-gray-700 '>Name</label>
        <input type="name" name='name' id='' placeholder='Enter Your Name' value={name}
         onChange={(e) => setName(e.target.value)}
         className=' w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none' required/>
        </div>
        <div className='mt-4'>
        <label className=' block text-gray-700 '>Email Address</label>
        <input type="email" name='email' id='' placeholder='Enter Your Email Address' value={email}
          onChange={(e) => setEmail(e.target.value)}
         className=' w-full px-4 py-3 rounded-lg bg-gray-200 border focus:border-blue-500 focus:bg-white focus:outline-none' autofocus autoComplete required/>
      </div>
      <div className='mt-4'>
      <label className=' block text-gray-700 '>Mobile Number</label>
        <input type="mobileNumber" name='mobileNumber' id='' placeholder='Enter Your Mobile Number' value={mobileNumber}
          onChange={(e)=> setMobileNumber(e.target.value)}
         className=' w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none' required/>
      </div>
      <div className='mt-4'>
      <label className=' block text-gray-700 '>Password</label>
        <input type="password" name='password' id='' placeholder='Enter Your Password' value={password}
          onChange={(e) => setPassword(e.target.value)}
         className=' w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none' required/>
      </div>
      <div className='mt-4'>
      <label className=' block text-gray-700 '>ConfirmPassword</label>
        <input type="password" name='passwordConfirm' id='' placeholder='Confirm Your Password'value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
         className=' w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none' required/>
      </div>
      <button type='submit' className='w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg px-4 py-3 mt-6'>Sign Up</button>
      </form>
      <div className='mt-7 grid grid-cols-3 item-center text-gray-500'>
        <hr className=' border-gray-500'/>
        <p className='text-center text-sm' >Or</p>
        <hr className=' border-gray-500'/>
      </div>
      <button onClick={signInWithGoogle} className=' bg-white border py-2 w-full rounder-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300'>
        <GoogleButton/>
        {/* <span className='ml-4'>Login With Google</span> */}
      </button>
      <div className='text-sm flex justify-between items-center mt-3'>
        <p>If You Already Have Account...</p>
        <Link to={'/login'}>
        <button className='py-2 px-5 ml-3 bg-white border rounded-xl hover:scale-110 hover:bg-[#22A1F5]  hover:text-white duration-300 border-blue-400'>Login</button>
        </Link>
      </div>
    </div>
    </div>
    </div>
  )
  }

export default RegisterPage

