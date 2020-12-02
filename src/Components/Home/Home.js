import React, { useContext } from 'react'
import styles from './Home.module.css'
import HeadLine from '../HeadLine/HeadLine'
import { Context } from "../../Context.js";
import EditNote from '../EditNote/EditNote'
import { useHistory } from "react-router-dom";
import NotesContainer from '../NotesContainer/NotesContainer'
import firebase from '../../Firebase'

const Home = () => {
    let { currentUser } = useContext(Context);
    const history = useHistory();

    if (!currentUser) {
        history.push('/login');
    }
    return (
        <div>
            <h1>{process.env.REACT_APP_FIREBASE_KEY}</h1>
            <HeadLine />
            <EditNote />
            <NotesContainer />
        </div>
    )
}

export default Home