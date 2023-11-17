import './App.css';
import React from 'react'


class BR2JSX extends React.Component{
  render() {
    let text = "first<br>second<br/>third<br />fourth"
    let lines=text.split(/<br *\/?>/);
    let arr =[];
    for (let i=0; i<lines.length; i++){
        arr.push(lines[i]);
        if(i<lines.length)
         arr.push(<br/>)
    }
    return <div className='container'>{arr}</div>

  }
}

export default BR2JSX;

