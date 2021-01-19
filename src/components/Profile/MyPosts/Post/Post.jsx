import React from "react";
import s from './Post.module.css'

const Post = (props) => {
    return <div className={s.post}>
        <div className={s.item}>
            <img src='https://www.meme-arsenal.com/memes/6e04ae9a90c6874a681e2c5d8cb5d046.jpg'/>
            {props.message}
            <div>
                <span>like {props.likesCount}</span>
            </div>
        </div>
    </div>
}

export default Post;