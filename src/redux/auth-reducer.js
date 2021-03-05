import {authAPI} from "../components/api/api";

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.payload,
                isAuth: true
            }
        default:
            return state;
    }
}

export default authReducer;

export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_AUTH_USER_DATA,
    payload: {userId, email, login, isAuth}})

export const getAuthUserData = () => {
    return (dispatch) => {
        authAPI.getAuthMe().then(data => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data;
                dispatch(setAuthUserData(id, email, login, true));
            }
        })
    }
};

export const login = (values) => {
    authAPI.login(values.email, values.password, values.rememberMe).then(response => {
        if (response.resultCode === 0) {
            getAuthUserData()
        }
    })
}

export const logout = () => {
        authAPI.logout().then(data => {
            if (data.resultCode === 0) {
                setAuthUserData(null, null, null, false)
            }
        })
}
