import React from 'react';
import styles from '../Styles/noteStatus.module.css'

function NoteStatus() {
  return (
    <div className={styles.container}>
        <div className={styles.table}>
            <div className={styles.titles}>
                <div>title 1</div>
                <div>title 2</div>
                <div>title 3</div>
            </div>
            <div className={styles.titles}>
                <div>notes 1</div>
                <div>notes 2</div>
                <div>notes 3</div>
            </div>
        </div>
    </div>
  )
}

export default NoteStatus