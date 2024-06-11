// modules
import { combineReducers } from "@reduxjs/toolkit"

// reducers
import { notesReducer } from "./notes/slice"

export const reducer = {
  notesReducer,
  // TODO add more reducer
};

export const rootReducer = combineReducers(reducer);