import React, { useState } from 'react'
import styles from './Login.module.css'
import { signin, onClickSignInBtn } from '../../functions/functions'
import { useHistory } from "react-router-dom";

const Login = () => {
    let [emailState, setEmailState] = useState();
    let [passwordState, setPasswordState] = useState();
    let [errorMessage, setErrorMessage] = useState();
    const history = useHistory();

    return (
        <form className={styles.container}>
            <h1 className={styles.title}>Login</h1>
            <input
                className={styles.input}
                value={emailState}
                onChange={e => setEmailState(e.target.value)}
                placeholder='Insert your e-mail...'></input>
            <input
                className={styles.input}
                value={passwordState}
                type='password'
                onChange={e => setPasswordState(e.target.value)}
                placeholder='Insert your password...'></input>
            <h1 className={styles.error}>{errorMessage}</h1>
            <button
                className={styles.loginButton}
                onClick={(e) => {
                    onClickSignInBtn(e, emailState, passwordState, history, setErrorMessage);
                }}>ENTER</button>
            <div className={styles.buttons}>
                <h1 className={styles.forgotPassword} onClick={() => {
                    history.push('/resetPassword')
                }}>Forgot your password?</h1>
                <h1 className={styles.createAccount} onClick={() => {
                    history.push('/signup')
                }}>Create account</h1>
            </div>
        </form>
    )
}

export default Login