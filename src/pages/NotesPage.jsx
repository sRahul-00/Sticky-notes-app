import { useContext } from "react";
import NoteCard from "../components/NoteCard";
import { NoteContext } from "../contexts/NoteContext";
import Controls from "../components/Controls";
// import { fakeData as notes } from "../assets/fakeData.js";

const NotesPage = () => {
  const { notes } = useContext(NoteContext);
  return (
    <div>
      {notes.map((note) => {
        return <NoteCard key={note.$id} note={note} />;
      })}

      <Controls />
    </div>
  );
};
export default NotesPage;
