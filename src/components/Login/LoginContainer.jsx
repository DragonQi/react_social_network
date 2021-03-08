import React from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import Login from "./Login";
import {login, setAuthUserData} from "../../redux/auth-reducer";
/*import {authAPI} from "../api/api";
import {Redirect} from "react-router-dom";*/



const onSubmit = (values) => {
    login(values.email, values.password, values.rememberMe)
}

/*const onSubmit = (values) => {
    login(values.email, values.password, values.rememberMe).then({
        if (isAuth) {
            return <Redirect to={'/profile'}/>
        }
    })
}*/

let mapStateToProps = (state) => {
    return {
        onSubmit: onSubmit,
        isAuth: state.auth.isAuth,
    }
};

export default compose(
    connect(mapStateToProps, {}),
)(Login);



