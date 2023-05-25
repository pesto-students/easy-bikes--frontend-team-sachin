import React from "react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import "./style.css";

const Loader=()=>{
    return( 
     <div className="App">
        <ClimbingBoxLoader
        color={'#0a69ea'}
        
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
        />
        </div>
        )
}

export default Loader;