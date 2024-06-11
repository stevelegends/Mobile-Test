// modules
import { all } from 'redux-saga/effects'

// saga
import { notesSaga } from "./notes/saga"

export default function* rootSaga() {
  yield all([
    notesSaga(),
    // TODO  add more saga
  ])
}