import React from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import Login from "./Login";
import {login} from "../../redux/auth-reducer";

const onSubmit = (values) => {login(values)}
/*const preView = (values) => {
    return <pre>{JSON.stringify(values, 0, 2)}</pre>}*/
let mapStateToProps = (state) => {
    return {
        onSubmit: onSubmit,
        /*preView: preView*/
    }
};

export default compose(
    connect(mapStateToProps, {}),
)(Login);



