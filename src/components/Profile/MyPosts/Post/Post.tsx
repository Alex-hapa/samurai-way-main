import React from 'react';
import cl from './Post.module.css'

type PropsType = {
    message: string
}

const Post: React.FC<PropsType> = (props) => {
    return (
        <div className={cl.item}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFU7U2h0umyF0P6E_yhTX45sGgPEQAbGaJ4g&usqp=CAU"
                alt="ava"/>
            {props.message}
        </div>
    )
}

export default Post;