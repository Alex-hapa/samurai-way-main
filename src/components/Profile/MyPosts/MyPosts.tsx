import React from 'react';
import cl from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea name="" id="" cols={30} rows={10}></textarea>
                <button>Add post</button>
            </div>
            <Post message={'Hello, how are you?'}/>
            <Post message={'What are you doing?'}/>
        </div>
    )
}

export default MyPosts;