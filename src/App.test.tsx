import React from 'react';
import {useEffect} from 'react';
import './App.css';
import axios from 'axios';
function App(){
  useEffect( ()=>{
    axios.get('http://localhost:5555/books').then(
      response =>console.log(response)
    )
  },[]);
  return(
    <div className='app'>
      <h1>A simple Program to test CORS POLICY in Noe.js</h1>
    </div>

  );

}
