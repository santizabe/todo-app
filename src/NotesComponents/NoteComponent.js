import React, { useState } from 'react'
// import { Button } from 'react-bootstrap'
import NoteForm from './NoteForm'
import Note from './Note'

function NoteComponent(props) {

  const [notes, setNotes] = useState([]);

  const removeNote = id => {
    const removeArr = [...notes].filter(note => note.id !== id)

    setNotes(removeArr)
  }
  
  const getNoteInfo = note => {
    if (!note) {return}
    const newNotes = [note, ...notes]
    setNotes(newNotes);
  }
  
  return (<>
    <NoteForm onSubmit={getNoteInfo} />
    <Note notes={notes}
    removeNote={removeNote}/>
  </>
  )
}

export default NoteComponent