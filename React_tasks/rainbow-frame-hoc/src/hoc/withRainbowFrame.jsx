import React from 'react';


export const withRainbowFrame = (colors) => (Fragment) => ({ ...props }) => {
    const reduceCB = (accum, cur) => {
        return (
            <div style={{ border: "solid 10px " + cur, padding: "10px" }}>{accum}</div>
        )
    }
    const rainbowFrame = colors.reduce(reduceCB, <Fragment {...props}/>);
    return (
        <div style={{textAlign: 'center',width: 700 }}>{rainbowFrame}</div>
    );
};