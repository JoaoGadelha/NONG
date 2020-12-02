import React, { useState } from 'react'
import styles from './Signup.module.css'
import { onClickSignupBtn } from '../../functions/functions'
import { useHistory } from "react-router-dom";

const Signup = () => {
    let [emailState, setEmailState] = useState();
    let [passwordState, setPasswordState] = useState();
    let [errorMessage, setErrorMessage] = useState();
    const history = useHistory();

    return (
        <form className={styles.container}>
            <h1 className={styles.title}>Sign up</h1>
            <input value={emailState}
                onChange={e => setEmailState(e.target.value)}
                placeholder='Insert your e-mail...'
                className={styles.input}></input>
            <input value={passwordState}
                type='password'
                onChange={e => setPasswordState(e.target.value)}
                placeholder='Insert your password...'
                className={styles.input}></input>
            <button className={styles.signupButton} onClick={(e) => onClickSignupBtn(e, emailState, passwordState, history, setErrorMessage)}>ENTER</button>
            <h1 className={styles.error}>{errorMessage}</h1>
            <h1 className={styles.login} onClick={() => {
                    history.push('/login')
                }}>Already have an account?</h1>
        </form>
    )
}

export default Signup