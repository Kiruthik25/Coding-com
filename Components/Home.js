
import { Routes, Route, Outlet, Link } from "react-router-dom";

import car from './cat.png';
import bike from './bike.png';
import dog from './dog.png';
import React, { useState } from 'react';

  
function Home() {
  const [showImage, setShowImage] = useState(null);
  const handleButtonClick = (img) => {
    setShowImage(img); // Toggle the value of showImage
  };

  return (
    <><div className='container'> 
    <h1>Home </h1> 
    <div className="container">
  <div className="row align-items-start">
    <div className="col">
     <button onClick={()=>handleButtonClick(1)}>car</button>
     
    </div>
    <div class="col">
    <button onClick={()=>handleButtonClick(2)}>bike</button>
    </div>
    <div class="col">
      <button onClick={()=>handleButtonClick(3)}>dog</button>
    </div>
  </div>
  
</div>
    
        </div>
        
        <div className="container">
      
        {/* <img src= {showImage} alt="Image Description" /> */}
        
        {showImage===1 && <p>car tag</p>}
        {showImage===2 && <p>bike tag</p>}
        {showImage===3 && <p>dog tag</p>}
        </div>
        
        </>
    
        
     
  )
}

export default Home