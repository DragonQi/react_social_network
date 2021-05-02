import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {authAPI} from "../api/api";
import {getAuthUserData, loginMe} from "../../redux/auth-reducer";
import {useDispatch} from "react-redux";




const Login = () => {
    const dispatch = useDispatch();

    return <div>
        {/*<h1>Login Here</h1>*/}
        <Formik
            initialValues={{email: '', password: ''}}
            validate={values => {
                const errors = {};
                if (!values.email) {
                    errors.email = 'Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }
                return errors;
            }}
            onSubmit={(values, {setSubmitting}) => {
                authAPI.login(values.email, values.password, values.rememberMe)
                    .then(response => {
                        if (response.data.resultCode === 0) {
                            dispatch(getAuthUserData())

                        }
                    })
            }}
        >
            {({isSubmitting}) => (
                <Form>
                    Login
                    <div>
                        <Field type="email" name="email"/>
                        <ErrorMessage name="email" component="div"/>
                    </div>
                    Password
                    <div>
                        <Field type="password" name="password"/>
                        <ErrorMessage name="password" component="div"/>
                    </div>
                    <div>
                        <Field type="checkbox" name="rememberMe"/> remember me
                    </div>
                    <button type="submit"> {/*disabled={isSubmitting}*/}
                        Submit
                    </button>
                </Form>
            )}
        </Formik>
    </div>
};
export default Login;