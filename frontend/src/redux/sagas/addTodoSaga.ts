import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { todoModel } from "../../models/todoModel";
import { addTodoFailure, addTodoSuccess } from "../actions/todoActions";
import { todoTypes } from "../actionTypes/todoTypes";
import { AxiosResponse } from "axios";

const addTodo = ({payload}:any) => axios.post("http://localhost:4001/todos/", payload);

function* addTodoSaga(todo:any) {
  try {
    const response: AxiosResponse<todoModel> = yield call(addTodo, todo);
    yield put(
        addTodoSuccess({
        todo: response.data
      })
    );
  } catch (e) {
    yield put(
      addTodoFailure({
        error: e.message
      })
    );
  }
}

function* postTodo() {
  yield all([takeLatest(todoTypes.ADD_TODO_REQUEST, addTodoSaga)]);
}

export default postTodo;