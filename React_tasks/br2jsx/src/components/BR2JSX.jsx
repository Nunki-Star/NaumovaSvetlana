import React from 'react';
import classes from './container.module.css'




class BR2JSX extends React.Component{
  render() {
    
    let lines=text.split(/<br *\/?>/);
    let arr =[];
    for (let i=0; i<lines.length; i++){
        arr.push(lines[i]);
        if(i<lines.length-1)
        arr.push(<br/>)
    }
    return <div>{arr}</div>
  }
}

export default BR2JSX;