import { useState } from "react"; 
import NoteContext from "./noteContext";
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const host = 'http://localhost:5000';

const NoteState = (props) => {
  const noteInitial = [];
  const [notes, setNotes] = useState(noteInitial);

  // Fetching all notes
  const fetchNotes = async () => {
    const url = `${host}/api/notes/fetchnotes`;
    const headers = {
      'Content-Type': 'application/json',  
      'auth-token': localStorage.getItem('token'),
    };

    try {
      const response = await axios.get(url, { headers });
      setNotes(response.data);
    } catch (error) {
      console.error('Error fetching notes:', error);
      toast.error("Failed to fetch notes.");
    }
  };

  // Adding a note to client and DB
  const addNote = async ({ title, description, tag }) => {
    const url = `${host}/api/notes/addnote`;
    const headers = {
      'Content-Type': 'application/json',  
      'auth-token': localStorage.getItem('token'),
    };
    
    try {
      const response = await axios.post(url, { title, description, tag }, { headers });
      
      // Add the newly created note (with _id) to the client state
      setNotes([...notes, response.data]);
      toast.success("Note added successfully!");
    } catch (error) {
      console.error('Error adding note:', error);
      toast.error("Failed to add note.");
    }
  };

  // Deleting a note at client and DB
  const deleteNote = async (_id) => {
    const url = `${host}/api/notes/deletenote/${_id}`;
    const headers = {
      'Content-Type': 'application/json',  
      'auth-token': localStorage.getItem('token'),
    };

    try {
      await axios.delete(url, { headers });
      
      // Update client state after successful deletion
      setNotes(notes.filter((note) => note._id !== _id));
      toast.success("Note deleted successfully!");
    } catch (error) {
      console.error('Error deleting note:', error);
      toast.error("Failed to delete note.");
    }
  };

  // Editing a note in client state and database
  const editNote = async (_id, updatedNote) => {
    const url = `${host}/api/notes/updatenote/${_id}`;
    const headers = {
      'Content-Type': 'application/json',
      'auth-token': localStorage.getItem('token'),
    };

    try {
      // db logic
      await axios.put(url, updatedNote, { headers });

      // Update client state if the API call is successful
      const newNotes = notes.map((note) =>
        note._id === _id ? { ...note, ...updatedNote } : note
      );
      setNotes(newNotes);
      toast.success("Note edited successfully!");
    } catch (error) {
      console.error('Error editing note:', error);
      toast.error("Failed to edit note.");
    }
  };

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, fetchNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;




