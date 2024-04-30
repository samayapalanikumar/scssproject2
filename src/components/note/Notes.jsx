import React from "react";
import { useState } from "react";

type Note = {
  id: number,
  title: string,
  content: string,
};

function Notes() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "note title 1",
      content: "content 1",
    },
    { id: 2, title: "note title 2", content: "content 2" },
    { id: 3, title: "note title 3", content: "content 3" },
    { id: 4, title: "note title 4", content: "content 4" },
  ]);

  const [title, setTitle] = useState("");
  const [condent, setCondent] = useState("");
  const [selectedNote, setSelectedNote] = (useState < Note) | (null > null);

  const handleNoteClick = (note: Note) => {
    setSelectedNote(note);
    setTitle(note.title);
    setCondent(note.content);
  };

  const handleAddNote = (event: React.FormEvent) => {
    event.preventDefault();

    const newNote: Note = {
      id: notes.length + 1,
      title: title,
      condent: condent,
    };

    setNotes([newNote, ...notes]);
    setTitle("");
    setCondent("");
  };

  const handleUpdateNote = (event: React.FormEvent) => {
    event.preventDefault();

    if (!selectedNote) {
      return;
    }

    const UpdateNote: Note = {
      id: selectedNote.id,
      title: title,
      condent: condent,
    };
    const UpdateNoteList = notes.map((note) =>
      note.id === selectedNote.id ? UpdateNote : note
    );

    setNotes(UpdateNoteList);
    setTitle("");
    setCondent("");
    setSelectedNote(null);
  };
  const handelcancel = () => {
    setTitle("");
    setCondent("");
    selectedNote(null);
  };

  const deleteNote = (event: React.MouseEvent, noteId: number) => {
    event.stopPropagation();

    const UpdateNotes = notes.filter((note) => note.id !== noteId);

    setNotes(UpdateNotes);
  };

  return (
    <>
      <div className="container">
        <form
          className="container__form"
          onSubmit={(event) =>
            selectedNote ? handleUpdateNote(event) : handleAddNote(event)
          }
        >
          <input
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            className="container__form__title"
            placeholder="Title"
            required
          ></input>

          <textarea
            value={condent}
            onChange={(event) => setCondent(event.target.value)}
            className="container__form__text"
            placeholder="Content"
            rows={10}
            required
          ></textarea>

          {selectedNote ? (
            <div className="container__form__update">
              <button className="container__form__update__sbtn" type="submit">
                Save
              </button>
              <button
                className="container__form__update__cbtn"
                onClick={handelcancel}
              >
                Cancel
              </button>
            </div>
          ) : (
            <button className="container__form__btn" type="submit">
              Add Note
            </button>
          )}
        </form>

        <div className="container__grid">
          {notes.map((note) => (
            <div
              className="container__grid__title"
              key={note.id}
              onClick={() => handleNoteClick(note)}
            >
              <div className="container__grid__title__sidebar">
                <button
                  className="container__grid__title__sidebar__btn1"
                  onClick={(event) => deleteNote(event, note.id)}
                >
                  X
                </button>
              </div>
              <h2 className="container__grid__title__heading">{note.Title}</h2>
              <p className="container__grid__title__para">{note.Content}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Notes;
