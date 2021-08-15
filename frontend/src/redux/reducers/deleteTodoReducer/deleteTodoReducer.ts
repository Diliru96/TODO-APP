/* eslint-disable import/no-anonymous-default-export */
import { todoTypes } from "../../actionTypes/todoTypes";
import { TodoActions, DeleteTodoState } from "../../types/types";

const initialState: DeleteTodoState = {
  pending: false,
  deleted : 0,
  error: null,
};

export default (state = initialState, action: TodoActions) => {
  switch (action.type) {
    case todoTypes.REMOVE_TODO_REQUEST:
      return {
        ...state,
        pending: true
      };
    case todoTypes.REMOVE_TODO_SUCCESS:
      return {
        ...state,
        pending: false,
        deleted: action.payload.deleted,
        error: null
      };
    case todoTypes.REMOVE_TODO_FAILURE:
      return {
        ...state,
        pending: false,
        todo: 0,
        error: action.payload.error
      };
    default:
      return {
        ...state
      };
  }
};
