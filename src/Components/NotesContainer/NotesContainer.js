import React, { useState, useEffect, useContext } from 'react'
import firebase from '../../Firebase'
import NoteItem from './NoteItem/NoteItem'
import styles from './NotesContainer.module.css'
import { Context } from "../../Context.js";

const NotesContainer = () => {
    let { firestoreData } = useContext(Context);

    return (
        <div>
            <div className={styles.grid}>
                {firestoreData.map(note => (
                    <NoteItem data={note} />
                ))}
            </div>

        </div>
    )
}

export default NotesContainer