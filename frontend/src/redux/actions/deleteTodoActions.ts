import { todoTypes } from "../actionTypes/todoTypes";
import {
  DeleteTodoRequest,
  DeleteTodoRequestPayload,
  DeleteTodoFailure,
  DeleteTodoFailurePayload,
  DeleteTodoSuccess,
  DeleteTodoSuccessPayload
} from "../types/types";


export const deleteTodoRequest = (
  payload:DeleteTodoRequestPayload
): DeleteTodoRequest => ({
  type: todoTypes.REMOVE_TODO_REQUEST,
  payload
});

export const deleteTodoSuccess = (
  payload:DeleteTodoSuccessPayload 
): DeleteTodoSuccess => ({
  type: todoTypes.REMOVE_TODO_SUCCESS,
  payload
});

export const deleteTodoFailure = (
  payload: DeleteTodoFailurePayload
): DeleteTodoFailure => ({
  type: todoTypes.REMOVE_TODO_FAILURE,
  payload
});
