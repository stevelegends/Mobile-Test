// modules
import { combineReducers } from "@reduxjs/toolkit"

// reducers
import { notesReducer } from "./notes/slice"
import { infiniteReducer } from "./infinite/slice"

export const reducer = {
  notesReducer,
  infiniteReducer,
  // TODO add more reducer
};

export const rootReducer = combineReducers(reducer);