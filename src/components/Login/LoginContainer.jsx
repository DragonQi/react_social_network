import React from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import Login from "./Login";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async values => {
    await sleep(300)
    window.alert(JSON.stringify(values, 0, 2))
}

const preView = (values) => {
    return <pre>{JSON.stringify(values, 0, 2)}</pre>
}
let mapStateToProps = (state) => {
    return {
        onSubmit: onSubmit,
        preView: preView
    }
};

let mapDispatchToProps = (dispatch) => {
    return {

    }
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
)(Login);



