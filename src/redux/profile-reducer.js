const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 12},
        {id: 2, message: "It's my first post", likesCount: 11},
        {id: 3, message: "Working", likesCount: 15},
        {id: 4, message: "yo", likesCount: 13}
    ],
    newPostText: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
            //добавление поста
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
            //логика набирания текста в textarea поста, с обновлением на каждый символ
        }
        default:
            return state;
    }
}

export default profileReducer;

export const addPostCreator = () => {
    return {type: ADD_POST}
};
export const updateNewPostTextCreator = (text) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: text}
};