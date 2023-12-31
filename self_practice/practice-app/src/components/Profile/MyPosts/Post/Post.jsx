import React from 'react';
import classes from './Post.module.css';


function Post(props){
    
    return(
        <div className = {classes.item}>
                   
            <img src="https://cdn-icons-png.flaticon.com/256/12583/12583427.png" alt="someicon"/>
            {props.message} 
            <span>like</span> {props.likesCount}
        </div>
    )
}

export default Post;
