import './App.css';

import 'bootstrap/dist/css/bootstrap.css';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Trends from './Components/Trends';
import Moduel from './Components/Moduel';
import BarChart from './Components/BarChart';
import React, { useState } from 'react';
function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <>
   
   <div className={`app ${isDarkMode ? 'dark' : 'light'}`}>
    <ul className="nav flex-column  ">
  
  <li className="nav-item">
    <Link to="/"><button>Home</button></Link>
  </li>
  <li className="nav-item">
    <Link to="moduel"> <button>Moduel</button></Link>
  </li>
  <li className="nav-item">
    <Link to="trends"><button>Trends</button></Link>
  </li>
  <li className="nav-item">
    <Link to="barchart"><button>BarChart</button></Link>
  </li>
  <li className="nav-item">
    <Link to="about"><button>About</button></Link>
  </li>
  <button onClick={toggleTheme}>Toggle Theme</button>
</ul>
   </div>
    <Outlet/>

     <Routes>
         <Route  exact path="/" element={<Home/>} />
          <Route path='/about' element={<About/>}/>
          <Route path='/trends' element={<Trends/>}></Route>
          <Route path='/barchart' element={<BarChart/>}></Route>
          <Route path='/moduel' element={<Moduel/>}></Route>

      </Routes>
     
   
    
   </>
   
  );
}

export default App;
