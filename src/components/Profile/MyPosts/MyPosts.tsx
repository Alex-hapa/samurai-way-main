import React from 'react';
import cl from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    let posts = [
        {id: 1, message: 'Hello, how are you?', likesCount: 10},
        {id: 2, message: 'What are you doing?', likesCount: 15},
    ];
    let postsElements = posts.map( post => <Post message={post.message} likesCount={post.likesCount}/>)

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
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;