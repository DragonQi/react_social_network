const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you?", likesCount: 12},
                {id: 2, message: "It's my first post", likesCount: 11},
                {id: 3, message: "Working", likesCount: 15},
                {id: 4, message: "yo", likesCount: 13}
            ],
            newPostText: ''
        },
        dialogsPage: {
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'},
                {id: 6, message: 'Yo'}
            ],
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Viktor'},
                {id: 6, name: 'Valera'}
            ]
        },
        sidebar: [
            {
                name: 'Ivan',
                iconLink: 'https://www.mandysam.com/img/random.jpg'
            },
            {
                name: 'Sergey',
                iconLink: 'https://sm.mashable.com/t/mashable_sea/photo/default/man-fakes-death-cat-q6u_2z9w.960.png'
            },
            {
                name: 'Nikolay',
                iconLink: 'https://upload.wikimedia.org/wikipedia/ru/thumb/4/4e/Daft_Punk_Random_Access_Memories_Cover_Art.jpg/274px-Daft_Punk_Random_Access_Memories_Cover_Art.jpg'
            }
        ]

    }, //стейт = данные
    _callSubscriber() {
        console.log('state changed')
    },

    getState() {
       return this._state;
    }, //метод передачи стейта в необходимую область
    subscribe(observer) {
        this._callSubscriber = observer;
    }, //обсервер для особой передачи функции rerenderEntireTree в стейт, без зацикливания импортов и экспортов

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
            //добавление поста
        }   else if (action.type === "UPDATE-NEW-POST-TEXT") {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
            //логика набирания текста в textarea поста, с обновлением на каждый символ(временно)
        }
    }
}; // { type: 'likeThis' }

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
};

export const updateNewPostTextActionCreator = (text) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: text}
};


export default store;

window.store = store;