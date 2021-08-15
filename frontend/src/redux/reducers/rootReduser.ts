import { combineReducers } from "redux";
import todoReducer from "./todoReducer/todoReducer";
import addTodoReducer from "./addTodoReducer/addTodoReducer";
import deleteTodoReducer from "./deleteTodoReducer/deleteTodoReducer";
import updateTodoReducer from "./updateTodoReducer/updateTodoReducer";

const rootReducer = combineReducers({
  todos: todoReducer,
  addTodo:addTodoReducer,
  deleteTodo:deleteTodoReducer,
  updateTodo:updateTodoReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
