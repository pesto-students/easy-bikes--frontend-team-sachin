
import React from 'react'
import { useSelector } from 'react-redux'
import FavoriteCard from '../components/FavouriteCard';
import Loader from '../components/Loader';
// import { Link } from 'react-router-dom';

const FavoritePage = () => {
  const {user,loading,isAuthenticated}=useSelector((state)=>state.user);
  console.log(user);
  console.log(loading);
  console.log(isAuthenticated);
  return (
<div>
      {!loading && isAuthenticated ? <div><FavoriteCard/></div>:<div><Loader/></div>}
</div>
  )
}

export default FavoritePage
