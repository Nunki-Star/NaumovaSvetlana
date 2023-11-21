import './App.css';
import React from 'react';
import BR2JSX from './components/BR2JSX'



function App(){
  let text =[
  {id:1, txt:"first<br>second<br/>third<br />fourth"}
  ]
  return(
    <div className = "container">
     {text.map((item, index)=><BR2JSX key={item.id} txt={item.txt}/>)}
    </div>
  )
}
export default App;



