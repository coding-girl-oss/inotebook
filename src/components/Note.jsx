import { useContext, useEffect } from "react";
import noteContext from "../context/notes/noteContext";
import NoteItem from "./NoteItem";
import { useNavigate,Link } from "react-router-dom";

const Note = (props) => {
  const navigate = useNavigate()
  const context = useContext(noteContext);
  const { notes, fetchNotes } = context;

  useEffect(() => {
    if(localStorage.getItem('token')){
      fetchNotes();
   }else{
      navigate('/login')
   }
  }, []);

  return (
    <div className="my-5">
      <h1 className="text-2xl text-black my-2 font-creepster">Your Notes:</h1>
      <div className="flex flex-wrap gap-4">
        {notes && notes.length > 0 ? (
          notes.map((item) => (
            <NoteItem key={item._id} item={item} onEdit={props.onEdit} />
          ))
        ) : (
          <p>No notes to display</p>
        )}
      </div>
    </div>
  );
};

export default Note;


