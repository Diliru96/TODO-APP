import { todoTypes } from "../actionTypes/todoTypes";
import {
  FetchTodoFailure,
  FetchTodoFailurePayload,
  FetchTodoRequest,
  FetchTodoSuccess,
  FetchTodoSuccessPayload,
  AddTodoRequest,
  AddTodoRequestPayload,
  AddTodoSuccess,
  AddTodoSuccessPayload,
  AddTodoFailure,
  AddTodoFailurePayload
} from "../types/types";

export const fetchTodoRequest = (): FetchTodoRequest => ({
  type: todoTypes.FETCH_TODO_REQUEST
});

export const fetchTodoSuccess = (
  payload: FetchTodoSuccessPayload
): FetchTodoSuccess => ({
  type: todoTypes.FETCH_TODO_SUCCESS,
  payload
});

export const fetchTodoFailure = (
  payload: FetchTodoFailurePayload
): FetchTodoFailure => ({
  type: todoTypes.FETCH_TODO_FAILURE,
  payload
});

export const addTodoRequest = (
  payload:AddTodoRequestPayload
): AddTodoRequest => ({
  type: todoTypes.ADD_TODO_REQUEST,
  payload
});

export const addTodoSuccess = (
  payload: AddTodoSuccessPayload
): AddTodoSuccess => ({
  type: todoTypes.ADD_TODO_SUCCESS,
  payload
});

export const addTodoFailure = (
  payload: AddTodoFailurePayload
): AddTodoFailure => ({
  type: todoTypes.ADD_TODO_FAILURE,
  payload
});
