import React from "react";
import NoteComponent from "../NotesComponents/NoteComponent";
import styles from "../Styles/notesStyles.module.css";

function NotesContainer() {
  return (
    <>
      <div className={styles.notesContainer}>
        <NoteComponent />
      </div>
    </>
  );
}

export default NotesContainer;
