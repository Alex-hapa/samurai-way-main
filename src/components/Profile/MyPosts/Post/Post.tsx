import React from 'react';
import cl from './Post.module.css'

const Post = () => {
    return (
        <div className={cl.item}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFU7U2h0umyF0P6E_yhTX45sGgPEQAbGaJ4g&usqp=CAU"
                alt="ava"/>
            My posts
        </div>
    )
}

export default Post;