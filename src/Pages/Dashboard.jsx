import React, { useState } from "react";
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
    return new Promise((resolve, reject) => {
    if (!note.title) {
      return reject('Title is required');
    }
    else if (!note.title.replace(/\s+/g, ' ').trim()) {
      return reject("Invalid note title")
    }
    note.title = note.title.replace(/\s+/g, ' ').trim();
    const newNotes = [...notes, note];
    setNotes(newNotes);
    return resolve();
    });
  };

  return (
    <>
      <NoteForm onSubmit={getNoteInfo} />
      <NoteStatus notes={notes} removeNote={removeNote} />
    </>
  );
}

export default Dashboard;
