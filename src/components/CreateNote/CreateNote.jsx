import React, { useState } from "react";
import "./styles.scss";

function CreateNote(props) {
  const [note, setNote] = useState({
    title: "",
    Content: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote({
      ...note,
      [name]: value,
    });
  };
  const submit = (e) => {
    e.preventDefault();
    props.onAdd(note);
    setNote({
      title: "",
      Content: "",
    });
  };

  return (
    <>
      <div className="container">
        <form className="container__form">
          <input
            className="container__form__input"
            name="title"
            value={note.title}
            onChange={handleChange}
            placeholder="Enter tilte here"
            required
          />
          <textarea
            className="container__form__text"
            name="Content"
            value={note.Content}
            onChange={handleChange}
            rows={10}
            placeholder="Enter content here"
            required
          />
          <button className="container__form__button" onClick={submit}>
            Add
          </button>
        </form>
      </div>
    </>
  );
}

export default CreateNote;
