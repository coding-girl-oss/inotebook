import { useState, useContext } from "react";
import Note from "./Note";
import noteContext from "../context/notes/noteContext";

const Notebook = () => {
  const [note, setNote] = useState({ title: "", description: "", _id: "", tag: "" });
  const context = useContext(noteContext);
  const { addNote, editNote } = context;

  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const handleAdd = (e) => {
    e.preventDefault();
  
    if (note._id) {
      // Editing an existing note
      editNote(note._id, {
        title: note.title,
        description: note.description,
        tag: note.tag
      });
    } else {
      // Adding a new note
      addNote(note);
    }
  
    // Reset the note input fields after adding/editing
    setNote({ title: "", description: "", _id: "", tag: "" });
  };
  
  // Set the note for editing when an edit button is clicked
  const handleEdit = (note) => {
    setNote(note); 
  };
  

  return (
    <>
      <div className="my-4 text-black">
        <h1 className="text-6xl text-center font-creepster text-black">iNotebook</h1>
        <p className="text-1xl text-center font-creepster">Your Notebook on the cloud</p>
      </div>
      <div className="max-w-[80vw] flex flex-col mx-auto text-black">
        <h1 className="text-2xl text-black my-2 font-creepster">Add Note:</h1>

        <label className="input input-bordered shadow-lg shadow-black  bg-[#1a6e84] border-[2px] outline-none border-black flex items-center gap-2">
          Title:
          <input
            type="text"
            id="title"
            required
            name="title"
            value={note.title}
            onChange={handleChange}
            className="grow"
          />
        </label>

        <label className="input input-bordered shadow-lg shadow-black  bg-[#1a6e84] border-[2px] outline-none border-black flex items-center my-2 gap-2">
          Desc:
          <input
            type="text"
            id="description"
            name="description"
            required
            value={note.description}
            onChange={handleChange}
            className="grow"
          />
        </label>

        <label className="input input-bordered shadow-lg shadow-black  bg-[#1a6e84] border-[2px] outline-none border-black flex items-center my-2 gap-2">
          Tag:
          <input
            type="text"
            id="tag"
            name="tag"
            value={note.tag}
            onChange={handleChange}
            className="grow"
          />
        </label>

        <button
          className="btn btn-outline font-creepster shadow-lg my-2 shadow-black text-2xl border-[2px]"
          onClick={handleAdd}
        >
          Save
        </button>

        <Note onEdit={handleEdit} />
      </div>
    </>
  );
};

export default Notebook;


