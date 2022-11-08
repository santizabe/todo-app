import React from 'react';
import NoteComponent from './NoteComponent';

function Note({notes, removeNote, setEdit}) {

  const dragStart = (e, id) => {
    console.log("Drag me!");
    e.dataTransfer.setData("noteId", id)
  }
  return (notes.map((note) => (
    <NoteComponent
    id='noteId'
    dragStart={dragStart}
    note={note}
    removeNote={removeNote}
    setEdit={setEdit}
    key={note.id}/>
  )))
}

export default Note