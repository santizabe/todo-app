import React from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import styles from "../Styles/notesStyles.module.css";
import "../Styles/notesStyles.module.css";

function NoteComponent({ note, removeNote, setEdit, dragStart }) {
  const color = note.color;

  return (
    <>
      <div
        className={`${styles.note} ${color}`}
        draggable
        onDragStart={(e) => dragStart(e, JSON.stringify(note))}
        key={note.id}
      >
        <div className="d-flex justify-content-between">
          <div className="title">{note.title}</div>
          <div className="icons">
            <RiCloseCircleLine
              onClick={() => removeNote(note.id)}
              className="remove-icon"
            />
            <TiEdit
              onClick={() => {
                setEdit({
                  id: note.id,
                  title: note.title,
                  description: note.description,
                  status: note.status,
                  color: note.color,
                });
              }}
              className="edit-icon"
            />
          </div>
        </div>
        <div className={styles.description}>{note.description}</div>
      </div>
    </>
  );
}

export default NoteComponent;
