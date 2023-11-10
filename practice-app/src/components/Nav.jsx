import React from 'react';
import classes from'./Nav.module.css'

function Nav(){
    return(
        <nav className = "nav">
            <div>
                <a href="#" class={classes.item}>Profile</a>
            </div>
            <div>
                <a href="#" class={classes.item}>Messages</a>
            </div>
            <div>
                <a href="#" class={classes.item}>News</a>
            </div>
            <div>
                <a href="#" class={classes.item}>Settings</a>
            </div>
      </nav> 
    )
}

export default Nav;