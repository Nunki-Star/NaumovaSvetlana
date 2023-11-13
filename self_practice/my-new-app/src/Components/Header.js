import React from 'react';
import classes from './Header.module.css'

function Header(){
    return(
        <>
            <h1 className = {classes.Header}>This is my first React application presentation<br/>
                or the story how i reached this step
            </h1>
        </>
    )
}

export default Header;
