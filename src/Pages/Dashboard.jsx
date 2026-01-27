import { useState } from "react";
import NoteStatus from "../NotesComponents/NoteStatus";
import NoteForm from "../NotesComponents/NoteForm";
import { useAuth } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

function Dashboard() {
  const { currentUser } = useAuth();
  const [notes, setNotes] = useState([]);

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  const removeNote = (id) => {
    const removeArr = [...notes].filter((note) => note.id !== id);

    setNotes(removeArr);
  };

  const getNoteInfo = (note) => {
    if (!note) {
      return;
    }
    const newNotes = [...notes, note];
    setNotes(newNotes);
  };

  return (
    <>
      <NoteForm onSubmit={getNoteInfo} />
      <NoteStatus notes={notes} removeNote={removeNote} />
    </>
  );
}

export default Dashboard;
