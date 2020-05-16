import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const DELETE_POST = 'DELETE-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SAVE_AVATAR_SUCCESS = 'SAVE_AVATAR_SUCCESS';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'XS is the main name of my products', likesCount: 10},
        {id: 4, message: 'Why am i not in Harvard?', likesCount: 10},
        {id: 5, message: 'I like React and ReactNative', likesCount: 10},
        {id: 6, message: 'There should be funny image. Maybe it will be in da future', likesCount: 15},
    ],
    newPostText: '',
    profile: null,
    status: ''

};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 7,
                message: action.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        case DELETE_POST: {
            return {...state, posts: state.posts.filter(p => p.id !== action.postId)}
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS: {
            return {...state, status: action.status}
        }
        case SAVE_AVATAR_SUCCESS: {
            return {...state, profile: {...state.profile, photos: action.photos} }
        }
        default:
            return state;
    }
};

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText});
export const deletePost = (postId) => ({type: DELETE_POST, postId});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const saveAvatarSuccess = (photos) => ({type: SAVE_AVATAR_SUCCESS, photos});

export const getUserProfile = (userId) => async (dispatch) => {
    let response = await usersAPI.profile(userId);
    dispatch(setUserProfile(response.data))
};

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data))
};

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
};

export const saveAvatar = (file) => async (dispatch) => {
    let response = await profileAPI.saveAvatar(file);
    if (response.data.resultCode === 0) {
        dispatch(saveAvatarSuccess(response.data.data.photos))
    }
};

export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userID;
    let response = await profileAPI.saveProfile(profile);
    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId))
    }
};

export default profileReducer;