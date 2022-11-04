import React from 'react';
import {RiCloseCircleLine} from 'react-icons/ri'
import {TiEdit} from 'react-icons/ti'
import styles from '../Styles/notesStyles.module.css'

function Note({notes, removeNote, setEdit}) {
  return notes.map((note, index) => (<>
    <div className={styles.note} key={index}>
      {note.title}
      <div className='icons'>
          <RiCloseCircleLine onClick={() => removeNote(note.id)}
            className='remove-icon'/>
          <TiEdit
            onClick={() => setEdit({id: note.id, title: note.title, description: note.description})}
            className='edit-icon'/>
      </div>
      <div
        className={styles.description}>
        {note.description}
      </div>
    </div>
    </>
    ))
}

export default Note