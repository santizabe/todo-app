import React, {useState} from "react";
import NoteStatus from "../NotesComponents/NoteStatus";
import NoteForm from '../NotesComponents/NoteForm'

function Dashboard() {

  const [notes, setNotes] = useState([]);

  const removeNote = id => {
    const removeArr = [...notes].filter(note => note.id !== id)

    setNotes(removeArr)
  }
  
  const getNoteInfo = note => {
    if (!note) {return}
    const newNotes = [...notes, note]
    setNotes(newNotes);
  }

  return (
    <>
      <NoteForm onSubmit={getNoteInfo} />
      <NoteStatus
        notes={notes}
        removeNote={removeNote}
      />
    </>
  );
}

export default Dashboard;
