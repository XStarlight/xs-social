import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'XS', likesCount: 10},
        {id: 4, message: 'Test1', likesCount: 10},
        {id: 5, message: 'Test2', likesCount: 10},
        {id: 6, message: 'Test3', likesCount: 15},
    ]
};

test('Array length should be incremented', () => {
    //1.Test data
    let action = addPostActionCreator('xs');
    //2.Action
    let newState = profileReducer(state, action);
    //3.Expectations
    expect(newState.posts.length).toBe(7)
});

test('Array length should be decremented', () => {
    let action = deletePost(1);
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(5)
});