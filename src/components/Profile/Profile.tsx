import React from 'react';
import cl from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={cl.content}>
            <div>
                <img
                    src="https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w="
                    alt="view"/>
            </div>
            <div>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoAEssp5xBCP420VJTAkFru3VTpDnHVnXzjg&usqp=CAU"
                    alt="ava"/>
            </div>
           <MyPosts/>
        </div>
    )
}

export default Profile;