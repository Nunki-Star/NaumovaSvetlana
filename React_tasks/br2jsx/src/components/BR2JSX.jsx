import React, { Component } from 'react';


class BR2JSX extends React.Component{
  render() {
      console.log("item", this.props.item)
      return (
      <div>
        header
      </div>)
    }
  }
 export default BR2JSX;

 /*let lines=this.props.text.text.split(/<br *\/?>/);
    let arr =[];
    for (let i=0; i<lines.length; i++){
        arr.push(lines[i]);
        if(i<lines.length-1)
        arr.push(<br/>)
      */