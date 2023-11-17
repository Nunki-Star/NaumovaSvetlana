import './App.css';
import React, { Component } from 'react';
import BR2JSX from './components/BR2JSX'

let text = 
  [
    {
      text:"first<br>second<br/>third<br />fourth"
    }
  ]
class App extends Component() {
  render(){
  return (
    <div>

      <BR2JSX item={text}/>
      
    </div>
    );
  }
}



export default App;



