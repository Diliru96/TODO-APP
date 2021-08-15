import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { deleteTodoFailure, deleteTodoSuccess } from "../actions/deleteTodoActions";
import { todoTypes } from "../actionTypes/todoTypes";
import { AxiosResponse } from "axios";

const deleteTodoService = ({payload}:any) => axios.delete(`http://localhost:4001/todos/${payload._id}`);

function* deleteTodoSaga(todo:any) {
  try {
    const response: AxiosResponse<number> = yield call(deleteTodoService, todo);
    yield put(
      deleteTodoSuccess({
        deleted: response.data
      })
    );
  } catch (e) {
    yield put(
      deleteTodoFailure({
        error: e.message
      })
    );
  }
}

function* deleteTodo() {
  yield all([takeLatest(todoTypes.REMOVE_TODO_REQUEST, deleteTodoSaga)]);
}

export default deleteTodo;