import React from "react";
import Note from "./Note";

const NoteList = ({ notes }) => (
  <div className="notelist">
    {notes ? (
      notes.map((note) => <Note note={note} key={note.id} />)
    ) : (
      <div>
        <h4>Notes Not Found.</h4>
      </div>
    )}
  </div>
);

export default NoteList;
