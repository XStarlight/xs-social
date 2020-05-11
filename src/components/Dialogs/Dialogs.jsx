import React from "react";
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/Dialogitem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {Element} from "../common/formsControl/FormsControl";
import {MaxLengthCreator, required} from "../common/validation/validation";

const Textarea = Element('textarea');
const maxLength15 = MaxLengthCreator(15);

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs
        .map(d => <DialogItem name={d.name} id={d.id} key={d.id} img={d.img}/>);
    let messagesElements = state.messages
        .map(m => <Message message={m.message} key={m.id}/>);

    let AddNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
    };

    const AddMessageForm = (props) => {
        return <form onSubmit={props.handleSubmit}>
            <div><Field component={Textarea}
                        name='newMessageBody'
                        validate={[required, maxLength15]}
                        placeholder='Enter your message'/></div>
            <div>
                <button>Send</button>
            </div>
        </form>
    };

    const AddMessageFormRedux = reduxForm({
        form: 'dialogAddMessageForm'
    })(AddMessageForm);

    return <div className={classes.dialogs}>
        <div className={classes.dialogsItems}>
            {dialogsElements}
        </div>
        <div className={classes.messages}>
            <div>{messagesElements}</div>
            <AddMessageFormRedux onSubmit={AddNewMessage}/>
        </div>

    </div>
};

export default Dialogs;