/* eslint-disable import/no-anonymous-default-export */
import { todoTypes } from "../../actionTypes/todoTypes";
import { TodoActions, UpdateTodoState } from "../../types/types";

const initialState: UpdateTodoState = {
  pending: false,
  todo :  {_id:"0",completed:false,title:""},
  error: null,
};

export default (state = initialState, action: TodoActions) => {
  switch (action.type) {
    case todoTypes.EDIT_TODO_REQUEST:
      return {
        ...state,
        pending: true
      };
    case todoTypes.EDIT_TODO_SUCCESS:
      return {
        ...state,
        pending: false,
        deleted: action.payload.todo,
        error: null
      };
    case todoTypes.EDIT_TODO_FAILURE:
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
