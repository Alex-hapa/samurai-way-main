import React from 'react';
import cl from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src="https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w="
                    alt="view"/>
            </div>
            <div className={cl.discriptionBlock}>
                ava + discription
            </div>
        </div>
    )
}

export default ProfileInfo;