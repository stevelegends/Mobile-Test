// modules
import { createAction, PayloadAction } from "@reduxjs/toolkit"
import {put, takeLatest, all, fork, select} from 'redux-saga/effects'

// reducer
import * as slice from "./slice"

// utils
import {delay} from "app/utils/delay";

// store
import {RootState} from "app/store/store";

// services
import {infiniteService} from "app/services/infinite/infinite";

export const setLoadMoreInfiniteDataAction = createAction(slice.infiniteReducer.name + '/setLoadMoreInfiniteDataAction')

function* onInitInfiniteSaga() {
  const data: Array<number> = yield infiniteService.getInfiniteData(0);
  yield put(slice.setPage(1))
  yield put(slice.setInfiniteData(data))
}

function* setLoadMoreInfiniteDataSaga(_action: PayloadAction) {
  yield put(slice.setIsLoadMore(true))

  const currentData: Array<number> = yield select((state: RootState) => state.infiniteReducer?.infiniteData)
  const page: number = yield select((state: RootState) => state.infiniteReducer?.page)

  const isLimit = page >= 10
  if (!isLimit) {
    yield delay(300);
    const newData: Array<number> =yield infiniteService.getInfiniteData(page)

    yield put(slice.setPage(page + 1))
    yield put(slice.setInfiniteData(currentData.concat(newData)))
  }

  yield put(slice.setIsLoadMore(false))
}

export function* infiniteSaga(): any {
  yield all([fork(onInitInfiniteSaga)]);
  yield all([
    yield takeLatest(setLoadMoreInfiniteDataAction, setLoadMoreInfiniteDataSaga),
  ])
}