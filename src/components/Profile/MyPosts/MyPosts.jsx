import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {addPostCreator, updateNewPostTextCreator} from "../../../redux/state";

const MyPosts = (props) => {

    let postsElements = props.posts
        .map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostCreator());
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextCreator(text));
    }

    return (
        <div className={s.postsBlock}>
            <h3>my post</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add Post</button>
                </div>
            </div>
                <div className={s.posts}>
                    { postsElements }
                </div>
        </div>);
};

export default MyPosts;