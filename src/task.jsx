import React, { useState } from "react";
import "./index.css";

function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [notes, setNotes] = useState([]);

  function addNote(e) {
    e.preventDefault();
    if (content.trim() === "") {
      alert("Content cannot be empty");
      return;
    }
    if (title.length > 100) {
      alert("Title cannot exceed 100 characters");
      return;
    }
    if (content.length > 5000) {
      alert("Content cannot exceed 5000 characters");
      return;
    }
    const duplicate = notes.some(
      (note) =>
        note.title.trim().toLowerCase() ===
          title.trim().toLowerCase() &&
        note.content.trim().toLowerCase() ===
          content.trim().toLowerCase()
    );
    if (duplicate) {
      alert("This note already exists");
      return;
    }

    const newNote = {
      id: Date.now(),
      title: title.trim(),
      content: content.trim(),
    };

    setNotes([...notes, newNote]);

    setTitle("");
    setContent("");
  }

  return (
    <div className="app">

      <h1>📝 My Notes</h1>


      <form className="note-form" onSubmit={addNote}>

        <input
          type="text"
          placeholder="Title (optional)"
          value={title}
          maxLength={100}
          onChange={(e) => setTitle(e.target.value)}
        />

        <p className="character-count">
          {title.length}/100
        </p>

        <textarea
          placeholder="Write your note..."
          value={content}
          maxLength={5000}
          onChange={(e) => setContent(e.target.value)}
        />

        <p className="character-count">
          {content.length}/5000
        </p>

        <button type="submit">
          Add Note
        </button>

      </form>



      <div className="notes-container">

        {notes.length === 0 ? (

          <div className="empty-state">
            <h2>No notes yet</h2>
            <p>Create your first note above.</p>
          </div>

        ) : (

          notes.map((note) => (

            <div
              className="note-card"
              key={note.id}
            >

              {note.title && (
                <h2>{note.title}</h2>
              )}

              <p>{note.content}</p>

            </div>

          ))

        )}

      </div>

    </div>
  );
}

export default App;