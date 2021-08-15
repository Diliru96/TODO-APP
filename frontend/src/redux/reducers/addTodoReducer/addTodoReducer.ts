/* eslint-disable import/no-anonymous-default-export */
import { todoTypes } from "../../actionTypes/todoTypes";
import { TodoActions, AddTodoState } from "../../types/types";

const initialState: AddTodoState = {
  pending: false,
  todo : {_id:"0",completed:false,title:""},
  error: null,
};

export default (state = initialState, action: TodoActions) => {
  switch (action.type) {
    case todoTypes.ADD_TODO_REQUEST:
      return {
        ...state,
        pending: true
      };
    case todoTypes.ADD_TODO_SUCCESS:
      return {
        ...state,
        pending: false,
        todo: action.payload.todo,
        error: null
      };
    case todoTypes.ADD_TODO_FAILURE:
      return {
        ...state,
        pending: false,
        todo: {},
        error: action.payload.error
      };
    default:
      return {
        ...state
      };
  }
};
