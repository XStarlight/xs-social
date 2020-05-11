import React from "react";
import classes from './Post.module.css';

const Post = (props) => {
    return <div className={classes.item}>
        <img src="https://img.moyo.ua/img/products/4246/67_1500.jpg" alt=""/>
        {props.message}
        <div>
            <span>like</span> {props.likesCount}
        </div>
    </div>
}

export default Post;