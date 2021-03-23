import {authAPI} from "../components/api/api";
import React from "react";

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';



let initialState = {
    userId: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false,
    authorizedUserId: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.data
            }
        default:
            return state;
    }
}

export default authReducer;

export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_AUTH_USER_DATA,
    data: {userId, email, login, isAuth}})

export const getAuthUserData = () => (dispatch) => {
        return authAPI.getAuthMe().then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
                dispatch(setAuthUserData(id, email, login, true));
            }
        })
}

/*export const loginMe = (email, password, rememberMe) => {
        return (dispatch) => {
            authAPI.login(email, password, rememberMe).then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(getAuthUserData())
                }
            })
        }
}

export const loginMe = (email, password, rememberMe) => (dispatch) => {
    return authAPI.login(dispatch).then(response => {
            console.log(response.data.resultCode)
    })
}*/


export const logout = () => (dispatch) => {
    authAPI.logout(dispatch).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
        }
    })
}



