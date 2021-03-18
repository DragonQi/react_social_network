/*import React from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import Login from "./Login";
import {getAuthUserData, login, setAuthUserData} from "../../redux/auth-reducer";



const onSubmit = (values) => {
    login(values.email, values.password, values.rememberMe)
}

/!*const onSubmit = (values) => {
    login(values.email, values.password, values.rememberMe).then({
        if (isAuth) {
            return <Redirect to={'/profile'}/>
        }
    })
}*!/

let mapStateToProps = (state) => ({
        isAuth: state.auth.isAuth
});

export default compose(
    connect(mapStateToProps, {login, setAuthUserData, getAuthUserData, onSubmit}),
)(Login);*/



