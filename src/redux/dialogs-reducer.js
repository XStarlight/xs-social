const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Dimych', img: 'https://www.meme-arsenal.com/memes/c53ae0caf88a91bcedaf28ec9aae5969.jpg'},
        {id: 2, name: 'Oleg'},
        {id: 3, name: 'Kirill'},
        {id: 4, name: 'Misha'},
        {id: 5, name: 'Olya'},
        {id: 6, name: 'Vika'},
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your business?'},
        {id: 3, message: 'What is your name?'},
        {id: 4, message: 'What country do you like to visit?'},
        {id: 5, message: 'What is the most important in your life?'},
        {id: 6, message: 'Where are you studying?'},
    ]
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 7, message: body}]
            };
        default:
            return state;
    }
};

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});
export const updateNewMessageBodyCreator = (text) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: text});

export default dialogsReducer;