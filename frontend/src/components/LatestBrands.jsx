import React from 'react';
import MyCardCaraousel from './cardCaraousel';
import Last from './Last';
const LatestBrands = () => {
  return (
    <div>
    <div className="title" style={{height:"25vh", display:"flex", justifyContent:"center", alignItems:"center"}}>
    <h1>Trending</h1>
    </div>
    <div className="brand-slider" >
    <MyCardCaraousel/>
    </div>
    <div className='divi' style={{margin: "25vh 0vh 10vh 1vh"}}>
      <img src='/images/divi.webp' alt='divi'/>
    </div>
    <div>
      <Last/>
    </div>
    </div>

  );
};

export default LatestBrands;
