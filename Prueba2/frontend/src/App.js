import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    const response = await axios.get('http://localhost:8000/api/notes/');
    setNotes(response.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:8000/api/notes/', {
      title,
      content,
    });
    setTitle('');
    setContent('');
    fetchNotes();
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Notes App</h1>
      
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Note title"
          className="block w-full p-2 mb-2 border rounded"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Note content"
          className="block w-full p-2 mb-2 border rounded"
        />
        <button 
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Note
        </button>
      </form>

      <div>
        {notes.map((note) => (
          <div key={note.id} className="border p-4 mb-2 rounded">
            <h2 className="font-bold">{note.title}</h2>
            <p>{note.content}</p>
            <small>{new Date(note.created_at).toLocaleString()}</small>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;