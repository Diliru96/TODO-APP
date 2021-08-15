import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { todoModel } from "../../models/todoModel";
import { todoTypes } from "../actionTypes/todoTypes";
import { AxiosResponse } from "axios";
import { updateTodoFailure, updateTodoSuccess } from '../actions/updateTodoActions';

const updateTodoService = ({payload}:any) => axios.put(`http://localhost:4001/todos/${payload._id}`, payload);

function* updateTodoSaga(todo:any) {
  try {
    const response: AxiosResponse<todoModel> = yield call(updateTodoService, todo);
    yield put(
        updateTodoSuccess({
        todo: response.data
      })
    );
  } catch (e) {
    yield put(
      updateTodoFailure({
        error: e.message
      })
    );
  }
}

function* updateTodo() {
  yield all([takeLatest(todoTypes.EDIT_TODO_REQUEST, updateTodoSaga)]);
}

export default updateTodo;