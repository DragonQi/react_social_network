import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

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
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Viktor'},
                {id: 6, name: 'Valera'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'},
                {id: 6, message: 'Yo'}
            ],
            newMessageBody: ''
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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    }
};

export default store;

window.store = store;