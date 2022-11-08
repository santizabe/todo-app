import React, { useState } from "react";
import styles from "../Styles/noteStatus.module.css";
import Note from "./Note";

function NoteStatus({ notes, removeNote }) {
  const pendingNotes = notes;
  const [inProcessNotes, setInProcessNotes] = useState([]);
  const [completedNotes, setCompletedNotes] = useState([]);

  const getPendingNoteInfo = (pendingNote) => {
    if (!pendingNote) {
      return;
    }
    const newInProcessNotes = [...inProcessNotes, pendingNote];
    setInProcessNotes(newInProcessNotes);
  };

  const getCompletedNoteInfo = (completedNote) => {
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
    const noteId = Number(e.dataTransfer.getData("noteId"));
    const newProcessNote = notes.find((note) => note.id === noteId);
    getPendingNoteInfo(newProcessNote);
    removeNote(noteId);
  };

  const dragCompletedOver = (e) => {
    e.preventDefault();
  };

  const droppedCompletedItem = (e) => {
    e.preventDefault();
    const noteId = Number(e.dataTransfer.getData("noteId"));
    const newCompletedNote = inProcessNotes.find((note) => note.id === noteId);
    getCompletedNoteInfo(newCompletedNote);
    removeInProcessNote(noteId);
  };

  const droppedItem = (e) => {
    e.preventDefault();
    const noteId = Number(e.dataTransfer.getData("noteId"));
    const newPendingNote = inProcessNotes.find((note) => note.id === noteId);
    console.log(newPendingNote);
    pendingNotes.push(newPendingNote);
    removeInProcessNote(noteId);
  };
  const dragOver = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.table}>
          <div className={styles.titles}>
            <div className="w-100 pending mt-3">
              <strong>Pending</strong>
            </div>
            <div className="w-100 mt-3">
              <strong>In process</strong>
            </div>
            <div className="w-100 finished mt-3">
              <strong>Finished</strong>
            </div>
          </div>
          <div className={styles.titles}>
            <div
              className="w-100 process-note border border-primary"
              onDrop={(e) => droppedItem(e)}
              onDragOver={(e) => dragOver(e)}
            >
              <Note notes={pendingNotes} removeNote={removeNote} />
            </div>
            <div
              className="w-100 process-note border border-primary"
              onDrop={(e) => droppedInProcessOver(e)}
              onDragOver={(e) => dragInProcessOver(e)}
            >
              <Note notes={inProcessNotes} removeNote={removeInProcessNote} />
            </div>
            <div
              className="w-100 process-note border border-primary"
              onDrop={(e) => droppedCompletedItem(e)}
              onDragOver={(e) => dragCompletedOver(e)}
            >
              <Note notes={completedNotes} removeNote={removeCompletedNote} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NoteStatus;
