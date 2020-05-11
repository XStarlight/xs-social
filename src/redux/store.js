import profileReducer from './profile-reducer'
import dialogsReducer from './dialogs-reducer'
import sidebarReducer from './sidebar-reducer'

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'It\'s my first post', likesCount: 11},
                {id: 3, message: 'XS', likesCount: 10},
                {id: 4, message: 'Misha', likesCount: 10},
                {id: 5, message: 'Olya', likesCount: 10},
                {id: 6, message: 'Vika', likesCount: 15},
            ],
            newPostText: ''
        },
        dialogsPage: {
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
            ],
            newMessageBody: ''
        },
        navbarFriends: [
            {id: 1, friend: 'Dimych'},
            {id: 2, friend: 'Oleg'},
            {id: 3, friend: 'Kirill'}
        ]
    },
    _callSubscriber() {
        console.log('State changed')
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.navbarFriends = sidebarReducer(this._state.navbarFriends, action);
        this._callSubscriber(this._state);
    }
};

window.store = store;

export default store;