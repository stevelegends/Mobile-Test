import { createSlice, PayloadAction } from "@reduxjs/toolkit"

// type
import type {Note} from "./type";

interface State {
  notes: Array<Note>;
  isSyncing: boolean;
}

const initialState: State = {
  notes: [],
  isSyncing: false,
};

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    setNotes: (state, action: PayloadAction<Array<Note>>) => {
      state.notes = action.payload;
    },
    setIsSyncing: (state, action: PayloadAction<boolean>) => {
      state.isSyncing = action.payload;
    },
  },
});

export const { setNotes, setIsSyncing} = notesSlice.actions;
export const notesReducer = notesSlice.reducer;