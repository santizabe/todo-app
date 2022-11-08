import React from 'react';
import styles from '../Styles/noteStatus.module.css';
import Note from './Note';

function NoteStatus({notes, removeNote}) {

  const dragOver = (e) => {
    e.preventDefault()
    console.log("dragging over");
  }

  const droppedItem = (e) => {
    console.log("dropped");
    let transferredId = e.dataTransfer.getData('noteId');
    console.log(transferredId);
  }
  return (
    <div className={styles.container}>
        <div className={styles.table}>
            <div className={styles.titles}>
                <div className='pending mt-3'>
                  <strong>Pending</strong>
                </div>
                <div className='mt-3'>
                  <strong>In process</strong>
                </div>
                <div className='finished mt-3'>
                  <strong>Finished</strong>
                </div>
            </div>
            <div className={styles.titles}>
                <div className='pending'>
                  <Note notes={notes}
                  removeNote={removeNote}/>
                </div>
                <div className='progress-note'
                droppable
                onDragOver={(e) => dragOver()}
                onDrop={(e) => droppedItem()}
                ></div>
                <div>notes 3</div>
            </div>
        </div>
    </div>
  )
}

export default NoteStatus