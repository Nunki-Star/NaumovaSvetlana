import React from 'react';





class Data extends React.Component{
  render() {
    let text = "first<br>second<br/>third<br />fourth"
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

export default Data;