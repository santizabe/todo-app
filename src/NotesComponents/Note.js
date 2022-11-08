import React from "react";
import NoteComponent from "./NoteComponent";

function Note({ notes, removeNote }) {
  const dragStart = (e, id) => {
    e.dataTransfer.setData("noteId", id);
  };
  return notes.map((note) => (
    <NoteComponent
      dragStart={dragStart}
      note={note}
      removeNote={removeNote}
      key={note.id}
    />
  ));
}

export default Note;
