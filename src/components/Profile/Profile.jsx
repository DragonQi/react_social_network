import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/PrifileInfo";

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={props.posts}/>
        </div>)
}

export default Profile;