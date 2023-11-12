import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post'


function MyPosts(){
    return(
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add text</button>
                <button>Remove</button>
            </div>
            <div classname = {classes.posts}>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
    )
}

export default MyPosts;
