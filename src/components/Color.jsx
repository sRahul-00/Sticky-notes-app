import { useContext } from "react";
import { NoteContext } from "../contexts/NoteContext";
import { db } from "../appwrite/databases";

const Color = ({ color }) => {
  const { selectedNote, notes, setNotes } = useContext(NoteContext);

  const handleChangeColor = () => {
    console.log("color: ", selectedNote);
    try {
      //   if (!notes.includes(selectedNote)) {
      //     alert("The card you are looking for might be deleted!");
      //     return;
      //   }

      const currentNoteIndex = notes.findIndex(
        (note) => note.$id === selectedNote.$id
      );

      const updatedNote = {
        ...notes[currentNoteIndex],
        colors: JSON.stringify(color),
      };

      //   console.log(notes);

      const newNotes = [...notes];
      newNotes[currentNoteIndex] = updatedNote;
      setNotes(newNotes);

      db.notes.update(selectedNote.$id, {
        colors: JSON.stringify(color),
      });
    } catch (error) {
      alert("You must selected a card in order to change its color");
    }
  };

  return (
    <div
      className="color"
      style={{ backgroundColor: color.colorHeader }}
      onClick={handleChangeColor}
    ></div>
  );
};
export default Color;
