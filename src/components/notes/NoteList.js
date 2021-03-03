import React from "react";
import Note from "./Note";

const NoteList = ({ notes }) => (
  <div className="notelist">
    {notes?.map((note) => (
      <Note note={note} key={note.id} />
    ))}
  </div>
);

export default NoteList;
