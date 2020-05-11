import React from "react";

const Tests = (props) => {
    let state = props.testsPage;
let textsElements = state.texts
    .map(t => <Text text={t.text} key={t.id}/>)

    let newText = state.newInputText;
    let onSendTextClick = () => {
        props.sendText();
    };
    let onNewTextChange = (e) => {
        let body = e.target.value;
        props.updateText(body)
    };

    return <div>
        <div>Type your text</div>
        <div>
                <textarea value={newText} onChange={onNewTextChange}></textarea>
                <button onClick={onSendTextClick}>Send</button>
        </div>
        <div>
            Text will be shown here:
            {textsElements}
        </div>
    </div>
};

const Text = (props) => {
    return <div>{props.text}</div>
};

export default Tests;