import React from 'react';
import { Form, Field } from 'react-final-form'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async values => {
    await sleep(300)
    window.alert(JSON.stringify(values, 0, 2))
}

const Login = (props) => {
    return (
        <>
            <Form
                onSubmit={onSubmit}
                render={({ handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <h2>Login Here</h2>
                        <div>
                            {/*<label>Login/Email</label>*/}
                            <Field type={'text'} name={"login"} component={"input"} placeholder={"Login"}/>
                        </div>
                        <div>
                            {/*<label>Password</label>*/}
                            <Field type={'password'} name={'password'} component={'input'} placeholder={"Password"}/>
                        </div>
                        <div>
                            <Field type={'checkbox'} name={'rememberMe'} component={'input'}/> remember me
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                )}
            />

        </>
    )
}

export default Login;