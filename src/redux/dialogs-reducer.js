const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Name1'},
        {id: 2, name: 'Name2'},
        {id: 3, name: 'Name3'},
        {id: 4, name: 'Name4'},
        {id: 5, name: 'Name5'},
        {id: 6, name: 'Name6'}
    ],
    messages: [
        {id: 1, message: '1'},
        {id: 2, message: '2'},
        {id: 3, message: '3'},
        {id: 4, message: '4'},
        {id: 5, message: '5'},
        {id: 6, message: '6'}
    ],
    newMessageBody: ''
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };
        //посимвольное обновление в textarea сообщения
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 7, message: body}]
            };
        //пуш содержимого textarea в _state
        default:
            return state;
    }
}

export default dialogsReducer;

export const sendMessageCreator = () => {
    return {type: SEND_MESSAGE}
};
export const updateNewMessageBodyCreator = (text) => {
    return {type: UPDATE_NEW_MESSAGE_BODY, body: text}
};