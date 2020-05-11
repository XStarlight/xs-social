import React from "react";
import Post from "./Post/Post";
import classes from './MyPosts.module.css'
import {Field, reduxForm} from "redux-form";
import {MaxLengthCreator, required} from "../../common/validation/validation";
import {Element} from "../../common/formsControl/FormsControl";

const MyPosts = (props) => {

    let postsElements = props.posts
        .map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    let addPost = (values) => {
        props.addPost(values.newPostText)
    };


    return <div className={classes.postsBlock}>
        <h3>My post</h3>
        <AddNewPostRedux onSubmit={addPost}/>
        <div className={classes.posts}>
            {postsElements}
        </div>
    </div>
};

const Textarea = Element('textarea');
const maxLength20 = MaxLengthCreator(20);

const AddNewPost = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field validate={[required, maxLength20]} component={Textarea} name='newPostText'/>
        </div>
        <div>
            <button>Add post</button>
        </div>
    </form>
};

const AddNewPostRedux = reduxForm({
    form: 'AddNewProfileForm'
})(AddNewPost);

export default MyPosts;