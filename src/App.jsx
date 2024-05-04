import React, { useState } from "react";
import CreateNote from "./components/CreateNote/CreateNote";
import ReactNote from "./components/ReactNote/ReactNote";

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
      <CreateNote onAdd={addNote} />
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
