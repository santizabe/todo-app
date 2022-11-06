import React from "react";
import NotesContainer from "../NotesComponents/NotesContainer";
import NoteStatus from "../NotesComponents/NoteStatus";
import { useAuth } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

function Dashboard() {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <NotesContainer />
      <NoteStatus />
    </>
  );
}

export default Dashboard;
