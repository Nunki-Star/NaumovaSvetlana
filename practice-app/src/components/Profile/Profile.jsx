import React from 'react';
import MyPosts from './MyPosts/MyPost';
import classes from'./Profile.module.css'
function Profile(){
    return(
        <div className={classes.content}>
            <img className={classes.img}src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/38/90/64/north-shore.jpg?w=1200&h=-1&s=1" alt="shore"/>
            <div>
                <p className = {classes.item}>
                    blabla
                </p>
            </div>
            <div>
                <p className = {classes.item}>
                    blablabla
                </p>
            </div>
            <MyPosts/>
        </div>
    )
}

export default Profile;




