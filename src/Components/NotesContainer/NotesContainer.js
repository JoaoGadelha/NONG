import React, { useState, useEffect, useContext } from 'react'
import firebase from '../../Firebase'
import NoteItem from './NoteItem/NoteItem'
import styles from './NotesContainer.module.css'
import { Context } from "../../Context.js";
import {fetchData} from '../../functions/functions'

const NotesContainer = () => {
    let { firestoreData, setFirestoreData, collection } = useContext(Context);

    useEffect(()=>{
        fetchData(collection, setFirestoreData);
    },[])

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