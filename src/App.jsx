import { useEffect, useState } from "react";

function App() {

  const [notes, setNotes] = useState([]);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function addNote() {

    if (content.trim() === "") {
      alert("Content is required");
      return;
    }

    if (title.length > 100) {
      alert("Title cannot exceed 100 characters");
      return;
    }

    const duplicate = notes.some(
      note =>
        note.title.trim() === title.trim() &&
        note.content.trim() === content.trim()
    );

    if (duplicate) {
      alert("Duplicate note is not allowed");
      return;
    }

    const newNote = {
      id: Date.now(),
      title: title.trim(),
      content: content.trim(),
      color: "yellow",
      tags: [],
      pinned: false,
      archived: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    setNotes([...notes, newNote]);

    setTitle("");
    setContent("");
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <h1 className="mb-6 text-3xl font-bold">
        My Notes
      </h1>

      <div className="mb-6 max-w-xl rounded-lg bg-white p-4 shadow">

        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mb-3 w-full rounded border p-2"
        />

        <textarea
          placeholder="Take a note..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="mb-3 w-full rounded border p-2"
        />

        <button
          onClick={addNote}
          className="rounded bg-blue-500 px-4 py-2 text-white"
        >
          Add Note
        </button>

      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

        {notes.map((note) => (

          <div
            key={note.id}
            className="rounded-lg bg-yellow-100 p-4 shadow"
          >

            <h2 className="mb-2 text-lg font-bold">
              {note.title}
            </h2>

            <p>
              {note.content}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default App;