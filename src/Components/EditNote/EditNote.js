import React, { useContext, useEffect, useState } from 'react'
import styles from './EditNote.module.css'
import { Context } from "../../Context.js";
import { fetchData, updateNote, deleteNote, createNote } from '../../functions/functions'

const EditNote = () => {
    let { editWindowIsVisible, setEditWindowIsVisible, currentNote, createFlag, firestoreData, setFirestoreData, collection } = useContext(Context);
    let [nameState, setNameState] = useState('');
    let [dateState, setDateState] = useState('');
    let [descState, setDescState] = useState('');

    useEffect(() => {
        if (!createFlag) {
            setNameState(currentNote.name);
            setDateState(currentNote.date);
            setDescState(currentNote.description);
        } else {
            setNameState('');
            setDateState('');
            setDescState('');
        }
        fetchData(collection, setFirestoreData);
    }, [editWindowIsVisible])

    return (
        <div className={styles.container} style={{ display: editWindowIsVisible ? 'grid' : 'none' }}>
            <div className={styles.titleBox}>
                {createFlag ? <h1>Create Note</h1> : <h1>Update Note</h1>}
                <div className={styles.closeButton}>
                    <i className="fas fa-times" onClick={() => setEditWindowIsVisible(false)}></i>
                </div>
            </div>
            <div className={styles.grid}>
                <h3 >Name:</h3>
                <input className={styles.input} value={nameState} onChange={(e) => setNameState(e.target.value)}></input>
                <h3>Date:</h3>
                <input type = 'date' className={styles.input} value={dateState} onChange={(e) => setDateState(e.target.value)}></input>
                <h3 className={styles.descLabel}>Description:</h3>
                <textarea value={descState}
                    onChange={(e) => setDescState(e.target.value)} className={styles.textArea}></textarea>
                <h1 className={styles.btn} onClick={
                    createFlag ?
                        () => { setEditWindowIsVisible(false); createNote({ name: nameState, date: dateState, description: descState }) }
                        : () => { setEditWindowIsVisible(false); updateNote(currentNote.id, { name: nameState, date: dateState, description: descState }) }
                }>
                    SAVE</h1>
                {!createFlag &&
                    <h1 className={styles.btn} onClick={currentNote !== undefined ? () => { setEditWindowIsVisible(false); deleteNote(currentNote.id) } : ''}>DELETE</h1>
                }
            </div>
        </div >
    )
}

export default EditNote