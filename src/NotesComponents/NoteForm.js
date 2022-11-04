import React from 'react';
import styles from '../Styles/formStyle.module.css';
import { useState } from 'react';
import '../Styles/formStyle.module.css'
import {RiCloseCircleLine} from 'react-icons/ri'

function NoteForm(props) {
  const [note, setNote] = useState({
    title: "",
    description: ""
  })

  const closeForm = () => {
  
  }

  const noteSave = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      title: note.title,
      description: note.description
    })
  }
  return (
    <div className={styles.formContainer}>Add a note
    <form>
        <input 
        className={styles.noteForm}
        type="text"
        placeholder="Note title"
        onChange={e => {setNote({...note, title: e.target.value})}}/>
        <textarea
        className={styles.noteForm}
        placeholder="Note's description"
        onChange={e => {setNote({...note, description: e.target.value})}}>
        </textarea>
        <button
        className={styles.success}
        onClick={noteSave}>Add note
        </button>
        <RiCloseCircleLine onClick={() => closeForm()}/>
    </form>
    </div>
  )
}

export default NoteForm