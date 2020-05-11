const SEND_TEXT = 'SEND_TEXT';
const UPDATE_NEW_INPUT_TEXT = 'UPDATE_NEW_INPUT_TEXT';

let initialState = {
    texts: [
        {id:1, text:'test text'}
    ],
    newInputText:''
};

const testsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_INPUT_TEXT:
            return {
                ...state,
                newInputText: action.body
            };
        case SEND_TEXT:
            let body = state.newInputText;
            return {
                ...state,
                newInputText: '',
                texts: [...state.texts, {id: 2, text: body}]
            };
        default:
            return state;

    }
};

export const sendText = () => ({type: SEND_TEXT});
export const updateText = (text) => ({type:UPDATE_NEW_INPUT_TEXT, body: text});

export default testsReducer;
