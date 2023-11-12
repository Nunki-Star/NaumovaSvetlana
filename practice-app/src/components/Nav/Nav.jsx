import React from 'react';
import classes from'./Nav.module.css'

function Nav(){
    return(
        <nav className={classes.nav}>
            <div>
                <a href="#" className={classes.item}>Profile</a>
            </div>
            <div>
                <a href="#" className={classes.item}>Messages</a>
            </div>
            <div>
                <a href="#" className={classes.item}>News</a>
            </div>
            <div>
                <a href="#" className={classes.item}>Settings</a>
            </div>
      </nav> 
    )
}

export default Nav;