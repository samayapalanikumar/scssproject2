import "./components/note/styles.scss";
import React, { useState } from "react";
import CreateNotes from "./components/note/CreateNotes";
import ReactNote from "./components/note/ReactNote";

function App() {
  const [note, setNote] = useState([]);

  const addNote = (newNote) => {
    setNote([...note, newNote]);
  };

  const deleteNote = (id) => {
    setNote(note.filter((note, i) => i !== id));
  };

  return (
    <>
      <h2 className="subhead">Create Note Here</h2>
      <CreateNotes onAdd={addNote} />
      {note.map((note, i) => (
        <ReactNote
          onDelete={deleteNote}
          id={i}
          title={note.title}
          Content={note.Content}
        />
      ))}
    </>
  );
}

export default App;
