import './App.css';
import React, { Component } from 'react';
import BR2JSX from './components/BR2JSX'

let text = "first<br>second<br/>third<br />fourth"

function App(){
  return(
    <div className = "container">
      <BR2JSX string={text}/>
    </div>
  )
}



export default App;



