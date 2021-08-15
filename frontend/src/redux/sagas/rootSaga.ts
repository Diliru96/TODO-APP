import { all, fork } from "redux-saga/effects";
import todoSaga from "./todoSaga";
import postSaga from "./addTodoSaga";
import deleteTodoSaga from "./deleteTodoSaga";
import updateTodo from './updateTodoSaga';

export function* rootSaga() {
  yield all([fork(todoSaga)]);
  yield all([fork(postSaga)]);
  yield all([fork(deleteTodoSaga)]);
  yield all([fork(updateTodo)]);
}
