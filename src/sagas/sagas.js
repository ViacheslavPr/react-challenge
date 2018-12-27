import { call, put, takeEvery } from "redux-saga/effects";
import {
  GET_SUCCEEDED,
  GET_FAILED,
  GET_PAGE_SUCCEEDED,
  GET_PAGE_FAILED,
  GET_DOG,
  GET_HANDLE
} from "../actions/types";

import { requestListDog, requestPageDog } from "../API/apiDog";
import { requestDog } from "../actions/apiActions";
import { requestPage } from "../actions/apiActions";

//List Dog
function* fetchDog() {
  try {
    yield put(requestDog());
    const data = yield call(requestListDog);
    yield put({ type: GET_SUCCEEDED, user: data });
  } catch (e) {
    yield put({ type: GET_FAILED, message: e.message });
  }
}

// Get PageDog by handle

function* fetchPage(action) {
  try {
    yield put(requestPage());
    const data = yield call(requestPageDog, action.handle);
    yield put({ type: GET_PAGE_SUCCEEDED, user: data });
  } catch (e) {
    yield put({ type: GET_PAGE_FAILED, message: e.message });
  }
}

export default function* mySaga() {
  yield takeEvery(GET_DOG, fetchDog);
  yield takeEvery(GET_HANDLE, fetchPage);
}
