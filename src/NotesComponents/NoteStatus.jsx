import React, { useState } from "react";
import styles from "../Styles/noteStatus.module.css";
import Note from "./Note";
import Modal from "./Modal";

function NoteStatus({ notes, removeNote }) {
  const pendingNotes = notes;
  const [inProcessNotes, setInProcessNotes] = useState([]);
  const [completedNotes, setCompletedNotes] = useState([]);
  const [noteToEdit, setNoteToEdit] = useState(null);

  const findNote = (note, status) => {
    const draggedNote = JSON.parse(note);
    if (draggedNote.status === status) {
      return;
    }
    let newNote = {};
    if (draggedNote.status === "pending") {
      newNote = notes.find((note) => note.id === draggedNote.id);
      removeNote(draggedNote.id);
    } else if (draggedNote.status === "process") {
      newNote = inProcessNotes.find((note) => note.id === draggedNote.id);
      removeInProcessNote(draggedNote.id);
    } else {
      newNote = completedNotes.find((note) => note.id === draggedNote.id);
      removeCompletedNote(draggedNote.id);
    }
    newNote.status = status;
    return newNote;
  };

  const getNoteToEdit = (note) => {
    setNoteToEdit(note);
  };

  const editNote = (editedNote) => {
    let noteIndex = 0;
    if (editedNote.status === "pending") {
      noteIndex = pendingNotes.indexOf(
        pendingNotes.find((note) => note.id === editedNote.id)
      );
      pendingNotes[noteIndex] = editedNote;
    } else if (editedNote.status === "process") {
      noteIndex = inProcessNotes.indexOf(
        inProcessNotes.find((note) => note.id === editedNote.id)
      );
      inProcessNotes[noteIndex] = editedNote;
    } else {
      noteIndex = completedNotes.indexOf(
        completedNotes.find((note) => note.id === editedNote.id)
      );
      completedNotes[noteIndex] = editedNote;
    }
    setNoteToEdit(null);
  };

  const getInProcessNote = (pendingNote) => {
    if (!pendingNote) {
      return;
    }
    const newInProcessNotes = [...inProcessNotes, pendingNote];
    setInProcessNotes(newInProcessNotes);
  };

  const getCompletedNote = (completedNote) => {
    if (!completedNote) {
      return;
    }
    const newCompletedNotes = [...completedNotes, completedNote];
    setCompletedNotes(newCompletedNotes);
  };

  const removeInProcessNote = (id) => {
    // Pending Notes
    const removeArr = [...inProcessNotes].filter((note) => note.id !== id);
    setInProcessNotes(removeArr);
  };

  const removeCompletedNote = (id) => {
    // Completed Notes
    const removeArr = [...completedNotes].filter((note) => note.id !== id);
    setCompletedNotes(removeArr);
  };

  const dragInProcessOver = (e) => {
    e.preventDefault();
  };

  const droppedInProcessOver = (e) => {
    e.preventDefault();
    const newProcessNote = findNote(
      e.dataTransfer.getData("noteId"),
      "process"
    );
    getInProcessNote(newProcessNote);
  };

  const dragCompletedOver = (e) => {
    e.preventDefault();
  };

  const droppedCompletedItem = (e) => {
    e.preventDefault();
    const newCompletedNote = findNote(
      e.dataTransfer.getData("noteId"),
      "completed"
    );
    getCompletedNote(newCompletedNote);
  };

  const droppedItem = (e) => {
    e.preventDefault();
    const newPendingNote = findNote(
      e.dataTransfer.getData("noteId"),
      "pending"
    );
    pendingNotes.push(newPendingNote);
  };
  const dragOver = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Modal note={noteToEdit} edit={editNote} />
      <div className={styles.container}>
        <div className={styles.table}>
          <div className={styles.titles}>
            <div className="w-100 pending mt-3 text-center">
              <strong>Pending</strong>
            </div>
            <div className="w-100 process mt-3 text-center">
              <strong>In process</strong>
            </div>
            <div className="w-100 finished mt-3 text-center">
              <strong>Finished</strong>
            </div>
          </div>
          <div className={styles.titles}>
            <div
              className="w-100 d-flex flex-column align-items-center"
              onDrop={(e) => droppedItem(e)}
              onDragOver={(e) => dragOver(e)}
            >
              <Note
                notes={notes}
                removeNote={removeNote}
                setEdit={getNoteToEdit}
              />
            </div>
            <div
              className="w-100 d-flex flex-column align-items-center"
              onDrop={(e) => droppedInProcessOver(e)}
              onDragOver={(e) => dragInProcessOver(e)}
            >
              <Note
                notes={inProcessNotes}
                removeNote={removeInProcessNote}
                setEdit={getNoteToEdit}
              />
            </div>
            <div
              className="w-100 d-flex flex-column align-items-center"
              onDrop={(e) => droppedCompletedItem(e)}
              onDragOver={(e) => dragCompletedOver(e)}
            >
              <Note
                notes={completedNotes}
                removeNote={removeCompletedNote}
                setEdit={getNoteToEdit}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NoteStatus;
