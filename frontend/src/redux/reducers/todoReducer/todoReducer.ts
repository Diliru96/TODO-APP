/* eslint-disable import/no-anonymous-default-export */
import { todoTypes } from "../../actionTypes/todoTypes";
import { TodoActions, TodoState } from "../../types/types";

const initialState: TodoState = {
  pending: false,
  todos : [],
  error: null,
};

export default (state = initialState, action: TodoActions) => {
  switch (action.type) {
    case todoTypes.FETCH_TODO_REQUEST:
      return {
        ...state,
        pending: true
      };
    case todoTypes.FETCH_TODO_SUCCESS:
      return {
        ...state,
        pending: false,
        todos: action.payload.todos,
        error: null
      };
    case todoTypes.FETCH_TODO_FAILURE:
      return {
        ...state,
        pending: false,
        todos: [],
        error: action.payload.error
      };
    default:
      return {
        ...state
      };
  }
};
