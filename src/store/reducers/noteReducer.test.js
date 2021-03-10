import noteReducer from "./noteReducer";

describe("Note Reducer", () => {
  it("Should return default state", () => {
    const newState = noteReducer(undefined, {});
    expect(newState).toEqual({
      note_to_edit: {},
    });
  });

  it("Should return new state if receiving type", () => {
    const noteToEdit = [];
    const newState = noteReducer(undefined, {
      type: "EDIT_NOTE",
      payload: noteToEdit,
    });
    expect(newState).toEqual(noteToEdit);
  });
});
