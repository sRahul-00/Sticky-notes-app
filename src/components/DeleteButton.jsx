import { useContext } from "react";
import { db } from "../appwrite/databases";
import { Trash } from "../icons/Trash";
import { NoteContext } from "../contexts/NoteContext";

const DeleteButton = ({ noteId }) => {
  const { setNotes } = useContext(NoteContext);
  const handleDelete = () => {
    // console.log("deleting card");
    db.notes.delete(noteId);
    setNotes((prevState) => prevState.filter((note) => note.$id !== noteId));
  };

  return (
    <div onClick={handleDelete}>
      <Trash />
    </div>
  );
};
export default DeleteButton;
