import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post'


function MyPosts(props){
    return(
        <div>
            {props.testmessage}
            <div>
                <textarea></textarea>
                <button>Add text</button>
                <button>Remove</button>
            </div>
            <div classname = {classes.posts}>
                <Post message="hi!how are you?" likesCount = "23"/>
                <Post message="its my first post" likesCount = "0"/>
            
            </div>
        </div>
    )
}

export default MyPosts;
