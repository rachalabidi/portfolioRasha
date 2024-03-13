import React from 'react';
import './App.css';
import VideoBackground from "./components/VideoBackground";
import NavBar from "./components/NavBar";
import Typo from "./components/Typo";
import Media from "./components/Media";



const App = () => {
  return (
    <div  className="content">
     
     <VideoBackground/>
      <div className="content">
        <NavBar/>
        <Typo/>
        <Media/>
       {/* <h1> hello</h1> */}
      </div>
       
    </div>
  );
};

export default App;
