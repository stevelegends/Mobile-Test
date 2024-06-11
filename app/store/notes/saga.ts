// modules
import { createAction, PayloadAction } from "@reduxjs/toolkit"
import {put, takeLatest, all, fork, select} from 'redux-saga/effects'
// @ts-ignore
import { v4 as uuid } from "uuid"

// reducer
import * as slice from "./slice"

// utils
import {delay} from "app/utils/delay";

// type
import type { Note } from "app/store/notes/type";

// store
import {realm} from "app/store/realm";
import {RootState} from "app/store/store";
import {netInfoRef} from "app/utils/netInfoRef";

export const addNoteAction = createAction<Note>(slice.notesSlice.name + '/addNoteAction')
export const getNotesAction = createAction(slice.notesSlice.name + '/getNotesAction')
export const updateCompleteNoteAction = createAction<{_id: string}>(slice.notesSlice.name + '/updateCompleteNoteAction')
export const deleteNoteAction = createAction<{_id: string}>(slice.notesSlice.name + '/deleteNoteAction')
export const syncNoteDataAction = createAction(slice.notesSlice.name + '/syncNoteDataAction')

function* initNotesSaga() {
    yield put(getNotesAction())
}

function* getNotesSaga() {
    const data = realm.objects('Notes')
    __DEV__ && console.log("realm data: ", JSON.stringify(data, undefined, "\t"))
    yield put(slice.setNotes(JSON.parse(JSON.stringify(data))))
}

function* addNoteSaga(action: PayloadAction<Note>) {
    realm.write(() => {
        realm.create('Notes', {
            _id: uuid(),
            title: action.payload.title,
            description: action.payload.description,
            createdAt: new Date(),
            updatedAt: new Date(),
        });
    });
    yield put(getNotesAction())
    yield put(syncNoteDataAction())
}

function* updateCompleteNoteSaga(action: PayloadAction<{ _id: string }>) {
    realm.write(() => {
        const notes = realm.objects('Notes')
        notes.map((item) => {
            if (item._id === action.payload._id){
                item.isComplete = !item.isComplete
            }
        })
    });
    yield put(getNotesAction())
    yield put(syncNoteDataAction())
}

function* deleteNoteSaga(action: PayloadAction<{ _id: string }>) {
    realm.write(() => {
        const notes = realm.objects('Notes')
        const note = notes.find((item) => item._id === action.payload._id)
        realm.delete(note)
    });
    yield put(getNotesAction())
    yield put(syncNoteDataAction())
}

function* syncNoteDataSaga() {
    // TODO sync data to server
   if(netInfoRef.current?.isConnected) {
       yield put(slice.setIsSyncing(true))
       yield delay(100)
       const data: Array<Note> = yield select((state: RootState) => state.notesReducer?.notes)
       yield put(slice.setIsSyncing(false))
   }
}

export function* notesSaga(): any {
    yield all([fork(initNotesSaga)]);
    yield all([
        yield takeLatest(addNoteAction, addNoteSaga),
        yield takeLatest(getNotesAction, getNotesSaga),
        yield takeLatest(updateCompleteNoteAction, updateCompleteNoteSaga),
        yield takeLatest(deleteNoteAction, deleteNoteSaga),
        yield takeLatest(syncNoteDataAction, syncNoteDataSaga),
    ])
}