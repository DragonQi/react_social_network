import React from 'react';
import { Form, Field } from 'react-final-form'



const required = value => (value ? undefined : 'Required');

const Login = (props) => {

    /*const onSubmit = (values) => {
        authAPI.login(values.email, values.password, values.rememberMe).then(response =>{
            if(response.data.resultCode === 0) {
                authAPI.getAuthMe().then(response =>{
                    if(response.data.resultCode === 0) {
                        debugger;
                        setAuthUserData(response.data.data.id, response.data.data.email, response.data.data.login, true)
                    }
                })
            }
        })
    }*/


    return (
        <>
            <Form
                onSubmit={props.onSubmit}
                render={({ handleSubmit, form, submitting, pristine, values }) => (
                    <form onSubmit={handleSubmit}>
                        <h2>Login Here</h2>
                        <Field name="email" validate={required}>
                            {({ input, meta }) => (
                                <div>
                                    <input {...input} type="text" placeholder="Email" />
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>
                        <Field name="password" validate={required}>
                            {({ input, meta }) => (
                                <div>
                                    <input {...input} type="password" placeholder="Password" />
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>
                        <div>
                            <Field type={'checkbox'} name={'rememberMe'} component={'input'}/> remember me
                        </div>
                        <button type="submit"
                                /*onClick={form.reset}*/
                        >Submit</button>
                    </form>
                )}
            />
        </>
    )
}

export default Login;