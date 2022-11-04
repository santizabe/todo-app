import React from "react";
import NotesContainer from "../NotesComponents/NotesContainer";
import NoteStatus from "../NotesComponents/NoteStatus";

function Dashboard() {
  return (
    <>
      <NotesContainer />
      <NoteStatus/>
    </>
  );
}

export default Dashboard;
