import { todoTypes } from "../actionTypes/todoTypes";
import {
  UpdateTodoRequest,
  UpdateTodoRequestPayload,
  UpdateTodoFailure,
  UpdateTodoFailurePayload,
  UpdateTodoSuccess,
  UpdateTodoSuccessPayload
} from "../types/types";


export const updateTodoRequest = (
  payload:UpdateTodoRequestPayload
): UpdateTodoRequest => ({
  type: todoTypes.EDIT_TODO_REQUEST,
  payload
});

export const updateTodoSuccess = (
  payload:UpdateTodoSuccessPayload 
): UpdateTodoSuccess => ({
  type: todoTypes.EDIT_TODO_SUCCESS,
  payload
});

export const updateTodoFailure = (
  payload: UpdateTodoFailurePayload
): UpdateTodoFailure => ({
  type: todoTypes.EDIT_TODO_FAILURE,
  payload
});
