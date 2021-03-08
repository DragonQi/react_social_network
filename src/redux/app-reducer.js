import {authAPI} from "../components/api/api";
import React from "react";

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false
};

const appReducer = (state = initialState, action) => {
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

export const getAuthUserData = () => {
    return (dispatch) => {
        authAPI.getAuthMe().then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
                dispatch(setAuthUserData(id, email, login, true));

            }

        })
    }
};

export const login = (email, password, rememberMe) => {
        authAPI.login(email, password, rememberMe).then(response => (
            authAPI.getAuthMe().then( response => {
                if(response.data.resultCode === 0) {
                    //getAuthUserData() позже реализовать по другому
                }
            })
        ))
}

export const logout = () => (dispatch) => {
    authAPI.logout(dispatch).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
        }
    })
}

