import React, { useState } from "react";
import styles from "../Styles/noteStatus.module.css";
import Note from "./Note";

function NoteStatus({ notes, removeNote }) {
  const pendingNotes = notes;
  const [inProcessNotes, setInProcessNotes] = useState([]);
  const [completedNotes, setCompletedNotes] = useState([]);
  const [dragging, setDragging] = useState(false)

  const findNote = (note, status) => {
    const draggedNote = JSON.parse(note)
    if (draggedNote.status === status) {return}
    let newNote = {}
    if (draggedNote.status === 'pending') {
      newNote = notes.find(note => note.id === draggedNote.id)
      removeNote(draggedNote.id)
    }
    else if (draggedNote.status === 'process') {
      newNote = inProcessNotes.find(note => note.id === draggedNote.id)
      removeInProcessNote(draggedNote.id)
    }
    else {
      newNote = completedNotes.find(note => note.id === draggedNote.id)
      removeCompletedNote(draggedNote.id)
    }
    newNote.status = status;
    return newNote;
  }

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
    setDragging(true)
  };

  const droppedInProcessOver = (e) => {
    e.preventDefault();
    const newProcessNote = findNote(e.dataTransfer.getData('noteId'), 'process');
    getInProcessNote(newProcessNote);
    setDragging(false)
  };

  const dragCompletedOver = (e) => {
    e.preventDefault();
  };

  const droppedCompletedItem = (e) => {
    e.preventDefault();
    const newCompletedNote = findNote(e.dataTransfer.getData('noteId'), 'completed')
    getCompletedNote(newCompletedNote);
  };

  const droppedItem = (e) => {
    e.preventDefault();
    const newPendingNote = findNote(e.dataTransfer.getData('noteId'), 'pending');
    pendingNotes.push(newPendingNote);
  };
  const dragOver = (e) => {
    e.preventDefault();
  };

  return (
    <>
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
              className="w-100 process-note"
              onDrop={(e) => droppedItem(e)}
              onDragOver={(e) => dragOver(e)}
            >
              <Note classname={ dragging && styles.dragging }
              notes={notes}
              removeNote={removeNote} />
            </div>
            <div
              className="w-100 process-note"
              onDrop={(e) => droppedInProcessOver(e)}
              onDragOver={(e) => dragInProcessOver(e)}
            >
              <Note notes={inProcessNotes} 
              classname={ dragging && styles.dragging }
              removeNote={removeInProcessNote} />
            </div>
            <div
              className="w-100 process-note"
              onDrop={(e) => droppedCompletedItem(e)}
              onDragOver={(e) => dragCompletedOver(e)}
            >
              <Note notes={completedNotes} 
              classname={ dragging && styles.dragging }
              removeNote={removeCompletedNote} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NoteStatus;
