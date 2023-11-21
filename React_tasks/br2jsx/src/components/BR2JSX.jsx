import React from 'react';


class BR2JSX extends React.Component{
  render() {
   //console.log(this.props.string)
    let lines = this.props.txt.split(/<br *\/?>/);
    const someTxt = lines.map((item, id) => {
      return (
        <div key={id}>
            {<br/> && id !== 0} 
            {item}
        </div>
        )}
        )

        return someTxt;
      }
}
export default BR2JSX;

 