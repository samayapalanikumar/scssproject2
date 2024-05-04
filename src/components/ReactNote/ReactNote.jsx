import React, { useState } from "react";
import "./styles.scss";

function ReactNote({
  id,
  title: initialTitle,
  Content: initialContent,
  onDelete,
  onUpdate,
}) {
  const [title, setTitle] = useState(initialTitle);
  const [content, setContent] = useState(initialContent);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleUpdate = () => {
    onUpdate(id, { title, Content: content });
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "title") {
      setTitle(value);
    } else if (name === "Content") {
      setContent(value);
    }
  };

  const handleClick = () => {
    onDelete(id);
  };

  return (
    <>
      <div className="subcontainer">
        {isEditing ? (
          <div className="subcontainer__edit">
            <input
              type="text"
              name="title"
              value={title}
              onChange={handleChange}
              className="subcontainer__edit__input"
              required
            />
            <textarea
              name="Content"
              value={content}
              onChange={handleChange}
              rows={5}
              className="subcontainer__edit__textarea"
              required
            />
            <button
              onClick={handleUpdate}
              className="subcontainer__edit__button1"
            >
              Update
            </button>
          </div>
        ) : (
          <>
            <h3 className="subcontainer__head">{title}</h3>
            <p className="subcontainer__para">{content}</p>

            <div className="subcontainer__btnsection">
              <button
                onClick={handleEdit}
                className="subcontainer__btnsection__button2"
              >
                Edit
              </button>
              <button
                onClick={handleClick}
                className="subcontainer__btnsection__button2"
              >
                Delete
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default ReactNote;
