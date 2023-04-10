import React from 'react';
import cl from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={cl.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea name="" id="" cols={20} rows={5}></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={cl.posts}>
                <Post message={'Hello, how are you?'} likesCount={10}/>
                <Post message={'What are you doing?'} likesCount={15}/>
            </div>
        </div>
    )
}

export default MyPosts;