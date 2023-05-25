import React from 'react'
import { useSelector } from 'react-redux';
import MyAddCard from '../components/MyAddCard';
import Loader from '../components/Loader';
const MyAdPage = () => {
  const {loading,isAuthenticated}=useSelector((state)=>state.user);

  return (
    <div>
      {!loading && isAuthenticated ?<div><MyAddCard/></div>:
    <div>
      <Loader/>
    </div>
    }
    </div>
  )
}

export default MyAdPage
