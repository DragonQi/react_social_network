const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            state.posts.push(newPost);
            state.newPostText = '';
            //добавление поста
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            //логика набирания текста в textarea поста, с обновлением на каждый символ(временно)
            return state;
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