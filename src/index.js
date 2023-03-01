import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { headingStyles,imgStyles } from "./styles.js";
import { cars } from "./images.js";
const App =(props)=>{
  const [srcIndex,setSrcIndex]=useState(0)
  useEffect(()=>{
    setInterval(()=>{
      setSrcIndex((prevSrcIndex)=>{
        if(prevSrcIndex===cars.length-1){
          return 0
        }
        return prevSrcIndex +1
      })
    },1500)
  },[])
return (
<div>
  <h1 style={headingStyles}>{props.title}</h1>
  <h2 style={headingStyles}> Image Carrousel with React js</h2>
  <img style={imgStyles} src={cars[srcIndex]}/>
</div>
)
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App title='React Styles'/>);
