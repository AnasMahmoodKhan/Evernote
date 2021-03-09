import React from "react";
import { useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";
import NoteList from "./NoteList";

const Favorites = () => {
  useFirestoreConnect([
    {
      collection: "notes",
      where: ["favorite", "==", true],
      orderBy: ["createdAt", "desc"],
      storeAs: "favNotes",
    },
  ]);

  const favnotes = useSelector((state) =>
    state.firestore.ordered ? state.firestore.ordered.favNotes : null
  );
  return <NoteList notes={favnotes} />;
};

export default Favorites;
