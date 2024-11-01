import { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";


const NoteItem = (props) => {
  const { title, description, _id,tag } = props.item;
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const [modal, setModal] = useState(false);

  // Toggle the modal state
  const handleToggle = () => {
    setModal(!modal);
  };

  // Pass note details to the parent component's onEdit function
  const handleEdit = () => {
    props.onEdit({ title, description, _id,tag });
  };

  const handleClose = () => {
    setModal(false);
  };

  const handleDelete = () => {
    deleteNote(_id);
    setModal(false);
  };

  return (
    <div className="card  relative border-[2px] border-black text-black w-80 h-fit my-4  hover:shadow-2xl shadow-black">
      <div className="   border-[2px] w-32 absolute right-0 text-center rounded-xl bg-black top-0 text-white"> {tag || 'default'}</div>
      <div className="card-body items-center text-center">
   
        <h2 className="card-title text-2xl font-bold">{title}</h2>

        <p>{description}</p>
        <div className="card-actions justify-end">
          <button
            onClick={handleEdit}
            className="edit-btn text-blue-500 hover:text-blue-700"
          >
            <lord-icon
              src="https://cdn.lordicon.com/zfzufhzk.json"
              trigger="hover"
              stroke="bold"
              colors="primary:#121131,secondary:#242424,tertiary:#8930e8,quaternary:#6c16c7,quinary:#3a3347"
              style={{ width: "40px", height: "30px" }}
            ></lord-icon>
          </button>

          <button
            onClick={handleToggle}
            className="delete-btn text-red-500 hover:text-red-700"
          >
            <lord-icon
              src="https://cdn.lordicon.com/xekbkxul.json"
              trigger="hover"
              colors="primary:#8930e8,secondary:#242424,tertiary:#646e78,quaternary:#ebe6ef"
              style={{
                width: "40px",
                height: "30px",
              }}
            ></lord-icon>
          </button>
        </div>
      </div>

      {/* Modal */}
      {modal && (
          <div className="modal modal-open sm:modal-center">
          <div className="bg-black text-white p-6 rounded-lg shadow-lg">
              <h3 className=" text-lg font-creepster">Delete Note</h3>
              <p className="py-4 font-creepster">Are you sure you want to delete this note?</p>
              <div className="modal-action">
                  <button onClick={handleDelete} className="btn btn-error ">Delete Note</button>
                  <button onClick={handleClose} className="btn btn-[#1a6e84] ">Cancel</button>
              </div>
          </div>
      </div>
      
      )}

    </div>
  );
};

export default NoteItem;

