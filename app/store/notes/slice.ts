import { createSlice, PayloadAction } from "@reduxjs/toolkit"

// type
import type { Notes } from "./type";

interface State {
  notes: Array<Notes>;
}

const initialState: State = {
  notes: [],
};

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<Notes>) => {
      state.notes = [...state.notes, action.payload];
    }
  },
});

export const { addNote } = notesSlice.actions;
export const notesReducer = notesSlice.reducer;