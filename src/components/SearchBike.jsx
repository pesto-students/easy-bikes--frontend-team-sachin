import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SearchBike = () => {
  const [keyword, setKeyword] = useState('')
 const navigate = useNavigate();
 
  const searchHandler = (e)=>{
    e.preventDefault();
    if(keyword.trim()){
      navigate(`/search/${keyword}`)
    }else{
      navigate('/');
    }
  }
  return (
    
      <div className="flex justify-center">
  <div className="mb-0  xl:w-96">
  <form onSubmit={searchHandler}>
    <div className="relative mb-4  flex w-full flex-wrap items-stretch">
      <input
        type="search"
        className="relative bg-white text-white m-0 -mr-px block w-[1%] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal outline-none transition duration-300 ease-in-out focus:border-[#22A1F5] focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:text-neutral-200 dark:placeholder:text-neutral-200"
        placeholder="Search Your Location Here"
        aria-label="Search"
        aria-describedby="button-addon1" 
        onChange={(e)=> setKeyword(e.target.value)}
        />
      <button
        className="relative z-[2] flex items-center rounded-r bg-[#22A1F5]  font-[Poppins] px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition ease-in-out hover:scale-110 duration-300 border-[#22A1F5] hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
       
        type="submit"
        id="button-addon1"
        data-te-ripple-init
        data-te-ripple-color="light">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-5 w-5">
          <path
            fill-rule="evenodd"
            d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
            clip-rule="evenodd" />
        </svg>
      </button>
    </div>
    </form>
  </div>
</div>
  
  )
}

export default SearchBike
