import { useContext, useRef } from "react";
import { Plus } from "../icons/Plus";
import colors from "../assets/colors.json";
import { db } from "../appwrite/databases";
import { NoteContext } from "../contexts/NoteContext";

const AddButton = () => {
  const { setNotes } = useContext(NoteContext);
  const startPos = useRef(10);

  const addNote = async () => {
    const payload = {
      position: JSON.stringify({
        x: startPos.current,
        y: startPos.current,
      }),

      colors: JSON.stringify(colors[0]),
    };

    startPos.current += 10;

    const response = await db.notes.create(payload);
    // console.log(response);

    setNotes((prevState) => [response, ...prevState]);
  };
  return (
    <div id="add-btn" onClick={addNote}>
      <Plus />
    </div>
  );
};
export default AddButton;
