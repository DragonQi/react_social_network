const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            //посимвольное обновление в textarea сообщения
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 7, message: body});
            //пуш содержимого textarea в _state
            return state;
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