import React, { useContext } from 'react'
import styles from './NoteItem.module.css'
import { Context } from "../../../Context.js";

const NoteItem = (props) => {
    let { setEditWindowIsVisible, setCurrentNote, setCreateFlag } = useContext(Context);

    return (
        <div className={styles.container} onClick={() => {
            window.scrollTo(0, 0)
            setCreateFlag(false);
            setEditWindowIsVisible(true);
            setCurrentNote(props.data);
        }}>
            {
                props.data.name.length > 30 ?
                    <h2 className={styles.name}>
                        {props.data.name.substr(0, 30) + '...'}
                    </h2>
                    : <h2 className={styles.name}>{props.data.name}</h2>
            }
            <h2>{props.data.date}</h2>
            {
                props.data.description.length > 120 ?
                    <h2 className={styles.desc}>
                        {props.data.description.substr(0, 120) + '...'}
                    </h2>
                    : <h2 className={styles.desc}>{props.data.description}</h2>
            }
        </div>
    )
}

export default NoteItem