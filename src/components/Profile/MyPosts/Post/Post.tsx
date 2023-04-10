import React from 'react';
import cl from './Post.module.css'

type PropsType = {
    message: string
    likesCount: number
}

const Post: React.FC<PropsType> = (props) => {
    debugger
    return (
        <div className={cl.item}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFU7U2h0umyF0P6E_yhTX45sGgPEQAbGaJ4g&usqp=CAU"
                alt="ava"/>
            {props.message}
            <div>
                <span>like </span> {props.likesCount}
            </div>
        </div>
    )
}

export default Post;