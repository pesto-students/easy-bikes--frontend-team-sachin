import React, { useEffect } from 'react'
import BikeCard from '../components/BikeCard'
import HeroSection from '../components/HeroSection'
import { useDispatch, useSelector } from 'react-redux'
import { getBike } from '../Actions/bikeAction'
import BikeLogo from '../components/BikeLogo'
import { Link, useParams } from 'react-router-dom'
import Pagination from 'react-js-pagination'
import { useState } from 'react'
import Loader from '../components/Loader'



const LandingPage = () => {
  const dispatch = useDispatch();
  const {keyword} = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const { isAuthenticated } = useSelector((state) => state.user);
  const {GotAllBikes, loading, BikeCreated, AllBikeData, bikeCount,resultPerPage } = useSelector(state => state.bike)

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  useEffect(() => {
    dispatch(getBike(keyword,currentPage)); 
  }, [BikeCreated,keyword,,currentPage])
  
  return (
    <>
      <HeroSection  />
      <BikeLogo/>
      {!loading && GotAllBikes ?
      <BikeCard/>
       : <div> <Loader/></div>}
    </>
  )
}

export default LandingPage

