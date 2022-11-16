import React from "react";
import { nanoid } from "nanoid";
import { useState, useEffect } from "react";

import Note from "./Note";
import Sidebar from "./Sidebar";
import Home from "./Home";

export default function App() {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  );
  const [currentNoteId, setCurrentNoteId] = useState(
    (notes[0] && notes[0].id) || ""
  );

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  function createNewNote() {
    const newNote = {
      id: nanoid(),
      title: "Untitled",
      content: "",
      isFavourite: false,
    };
    setNotes((prevNotes) => [...prevNotes, newNote]);
    setCurrentNoteId(newNote.id);
  }

  function switchTheme() {
    setDarkMode((prevMode) => {
      localStorage.setItem("darkMode", !prevMode);
      return !prevMode;
    });
  }

  function openSidebar() {
    document.querySelector(".sidebar--open").style.display = "none";
    document.querySelector(".sidebar").style.width = "15rem";
    document.querySelector(".note").style.marginLeft = "15rem";
  }

  function closeSidebar() {
    document.querySelector(".sidebar--open").style.display = "block";
    document.querySelector(".sidebar").style.width = "0rem";
    document.querySelector(".note").style.marginLeft = "0rem";
  }

  function updateNote(e) {
    setNotes((oldNotes) =>
      oldNotes.map((note) => {
        return note.id === currentNoteId
          ? { ...note, [e.target.name]: e.target.value }
          : note;
      })
    );
  }

  function findCurrentNote() {
    return (
      notes.find((note) => {
        return note.id === currentNoteId;
      }) || notes[0]
    );
  }

  function handleFavourite() {
    setNotes((oldNotes) =>
      oldNotes.map((note) => {
        return note.id === currentNoteId
          ? { ...note, isFavourite: !note.isFavourite }
          : note;
      })
    );
  }

  function favouriteNotes() {
    return notes.filter((note) => note.isFavourite);
  }

  function deleteNote(event, currentNoteId) {
    const parent = event.currentTarget.parentElement;
    if (parent.className.includes("sidebar-note-title")) {
      const idToDelete = parent.getAttribute("data-id");
      setNotes((oldNotes) => oldNotes.filter((note) => note.id !== idToDelete));
    } else {
      setNotes((oldNotes) =>
        oldNotes.filter((note) => note.id !== currentNoteId)
      );
    }
  }

  return (
    <div className={`App ${darkMode ? "dark" : ""}`}>
      {notes.length > 0 ? (
        <>
          <Sidebar
            note={notes}
            darkMode={darkMode}
            currentNoteId={currentNoteId}
            favouriteNotes={favouriteNotes()}
            createNewNote={createNewNote}
            deleteNote={deleteNote}
            closeSidebar={closeSidebar}
            setCurrentNoteId={setCurrentNoteId}
          />
          <Note
            darkMode={darkMode}
            openSidebar={openSidebar}
            switchTheme={switchTheme}
            deleteNote={deleteNote}
            handleChange={updateNote}
            handleFavourite={handleFavourite}
            currentNote={findCurrentNote()}
          />
        </>
      ) : (
        <Home createNewNote={createNewNote} />
      )}
    </div>
  );
}
