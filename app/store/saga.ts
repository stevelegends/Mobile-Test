// modules
import { all } from 'redux-saga/effects'

// saga
import { notesSaga } from "./notes/saga"
import { infiniteSaga } from "./infinite/saga"

export default function* rootSaga() {
  yield all([
    notesSaga(),
    infiniteSaga(),
    // TODO  add more saga
  ])
}