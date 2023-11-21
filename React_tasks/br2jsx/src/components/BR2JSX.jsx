import React from 'react';


class BR2JSX extends React.Component{
  render() {
   //console.log(this.props.string)
    let lines = this.props.txt.split(/<br *\/?>/);
    
    let arr =[];
    
    for (let i=0; i<lines.length; i++){
        arr.push(lines[i]);
        
        if(i<lines.length-1){
          arr.push(<br key={lines[i]}/>)
      };
      }
  
    return arr
  }
}



export default BR2JSX;

 