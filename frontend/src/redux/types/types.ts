import { todoModel } from "../../models/todoModel";
import { todoTypes } from "../actionTypes/todoTypes";

/** Delete Todo types  */
export interface TodoState {
  pending: boolean;
  todos: todoModel[];
  error: string | null;
}

export interface FetchTodoSuccessPayload {
  todos: todoModel[];
}

export interface FetchTodoFailurePayload {
  error: string;
}

export interface FetchTodoRequest {
  type: typeof todoTypes.FETCH_TODO_REQUEST;
}

export type FetchTodoSuccess = {
  type: typeof todoTypes.FETCH_TODO_SUCCESS;
  payload: FetchTodoSuccessPayload;
};

export type FetchTodoFailure = {
  type: typeof todoTypes.FETCH_TODO_FAILURE;
  payload: FetchTodoFailurePayload;
};

/** Add todo types */
export interface AddTodoState {
  pending: boolean;
  todo: todoModel;
  error: string | null;
}

export interface AddTodoSuccessPayload {
  todo: todoModel;
}

export interface AddTodoFailurePayload {
  error: string;
}

export interface AddTodoRequestPayload {
  title:string, 
  completed:boolean
}

export interface AddTodoRequest {
  type: typeof todoTypes.ADD_TODO_REQUEST;
  payload:AddTodoRequestPayload;
}

export type AddTodoSuccess = {
  type: typeof todoTypes.ADD_TODO_SUCCESS;
  payload: AddTodoSuccessPayload;
};

export type AddTodoFailure = {
  type: typeof todoTypes.ADD_TODO_FAILURE;
  payload: AddTodoFailurePayload;
};

/** Delete Todo Types */
export interface DeleteTodoState {
  pending: boolean;
  deleted: number;
  error: string | null;
}

export interface DeleteTodoSuccessPayload {
  deleted: number;
}

export interface DeleteTodoFailurePayload {
  error: string;
}

export interface DeleteTodoRequestPayload {
  _id:string, 
}

export interface DeleteTodoRequest {
  type: typeof todoTypes.REMOVE_TODO_REQUEST;
  payload:DeleteTodoRequestPayload;
}

export type DeleteTodoSuccess = {
  type: typeof todoTypes.REMOVE_TODO_SUCCESS;
  payload: DeleteTodoSuccessPayload;
};

export type DeleteTodoFailure = {
  type: typeof todoTypes.REMOVE_TODO_FAILURE;
  payload: DeleteTodoFailurePayload;
};

/** Update Todo Types */
export interface UpdateTodoState {
  pending: boolean;
  todo: todoModel;
  error: string | null;
}

export interface UpdateTodoSuccessPayload {
  todo: todoModel;
}

export interface UpdateTodoFailurePayload {
  error: string;
}

export interface UpdateTodoRequestPayload {
  _id:string;
  title:string;
  completed:boolean;
}

export interface UpdateTodoRequest {
  type: typeof todoTypes.EDIT_TODO_REQUEST;
  payload:UpdateTodoRequestPayload;
}

export type UpdateTodoSuccess = {
  type: typeof todoTypes.EDIT_TODO_SUCCESS;
  payload: UpdateTodoSuccessPayload;
};

export type UpdateTodoFailure = {
  type: typeof todoTypes.EDIT_TODO_FAILURE;
  payload: UpdateTodoFailurePayload;
};

export type TodoActions =
  | FetchTodoRequest
  | FetchTodoSuccess
  | FetchTodoFailure
  | AddTodoRequest
  | AddTodoSuccess
  | AddTodoFailure
  | DeleteTodoRequest
  | DeleteTodoSuccess
  | DeleteTodoFailure
  | UpdateTodoRequest
  | UpdateTodoSuccess
  | UpdateTodoFailure;