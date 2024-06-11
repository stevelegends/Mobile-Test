// modules
import { createAction, PayloadAction } from "@reduxjs/toolkit"
import { put, takeLatest, all, fork} from 'redux-saga/effects'

// reducer
import * as slice from "./slice"

// type
import type { Notes } from "app/store/notes/type";

export const addNoteAction = createAction<Notes>(slice.notesSlice.name + '/addNoteAction')

function* initNotesSaga() {
  __DEV__ && console.log("initNotesSaga")
}

function* setValueSaga(action: PayloadAction<Notes>) {
  yield put(slice.addNote(action.payload))
}

export function* notesSaga(): any {
  yield all([fork(initNotesSaga)]);
  yield all([
    yield takeLatest(addNoteAction, setValueSaga),
  ])
}