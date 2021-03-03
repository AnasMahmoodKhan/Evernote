export const addNote = (note) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("notes")
      .add({
        ...note,
        favorite: false,
        createdAt: new Date(),
      })
      .then(() => {
        console.log("add note successful");
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const deleteNote = (note) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("notes")
      .doc(note.id)
      .delete()
      .then(() => {
        console.log("delete note successful");
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const toggleFavorite = (note) => {
  return (dispatch, getState, { getFirestore }) => {
    const favoriteStatus = !note.favorite;
    const firestore = getFirestore();
    firestore
      .collection("notes")
      .doc(note.id)
      .update({
        favorite: favoriteStatus,
      })
      .then(() => {
        console.log("favorite status changed");
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const updateNote = (note) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("notes")
      .doc(note.id)
      .update({
        title: note.title,
        content: note.content,
      })
      .then(() => {
        console.log("favorite status changed");
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
