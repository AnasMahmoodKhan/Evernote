import React from "react";
import { useFirestoreConnect } from "react-redux-firebase";
import { useSelector } from "react-redux";
import NoteList from "../notes/NoteList";
import Form from "./Form";

function Home() {
  useFirestoreConnect([
    { collection: "notes", orderBy: ["createdAt", "desc"] },
  ]);
  const notes = useSelector((state) => state.firestore.ordered?.notes);
  console.log(notes);
  return (
    <div className="container">
      <div className="row center-align">
        <div className="col s7">
          <Form />
        </div>
        <div className="col s5">
          <NoteList notes={notes} />
        </div>
      </div>
    </div>
  );
}

export default Home;
