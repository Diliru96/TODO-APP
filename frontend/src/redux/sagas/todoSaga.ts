import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { todoModel } from "../../models/todoModel";
import { fetchTodoFailure, fetchTodoSuccess } from "../actions/todoActions";
import { todoTypes } from "../actionTypes/todoTypes";
import { AxiosResponse } from "axios";

const getTodos = () =>
  axios.get<todoModel[]>("http://localhost:4001/todos/");

function* fetchTodoSaga() {
  try {
    const response: AxiosResponse<todoModel[]> = yield call(getTodos);
    yield put(
        fetchTodoSuccess({
        todos: response.data
      })
    );
  } catch (e) {
    yield put(
      fetchTodoFailure({
        error: e.message
      })
    );
  }
}

function* todoSaga() {
  yield all([takeLatest(todoTypes.FETCH_TODO_REQUEST, fetchTodoSaga)]);
}

export default todoSaga;