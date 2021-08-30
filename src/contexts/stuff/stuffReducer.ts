import { v4 as uuidv4 } from "uuid"; // added package for generating GUID

import { Todo } from "../../models/todoType";
import { StuffActionTypes } from "./stuffActions";
import { get, store } from "../../utils/cache";

export type StuffTodoState = {
  todos: Todo[];
};

interface IAction {
  readonly type: string;
  readonly payload?: any;
}

/*for maintainability, changes for localStorage key only happens here*/
const key = "stuff";

export const stuffReducer = (state: StuffTodoState, action: IAction) => {
  switch (action.type) {
    case StuffActionTypes.GET_ALL_STUFF_TODO:
      /* get data from the localStorage */
      const todos = get<Todo[]>(key);

      /* just return if it's null */
      if (!todos) return { ...state };
      return { ...state, todos };

    case StuffActionTypes.DELETE_STUFF_TODO:
      /* adding a confirmation before deleting */
      const accept = confirm("Are you sure want to delete this?");
      if (!accept) return state;

      /* remove the selected item from the todos */
      const filteredTodos = state.todos.filter((t) => t.id !== action.payload);

      /* save the current todos again in the localStorage before returning the new state of the context */
      store(key, filteredTodos);
      return {
        ...state,
        todos: filteredTodos,
      };

    case StuffActionTypes.ADD_STUFF_TODO:
      /* create a new todo*/
      const newTodo: Todo = {
        id: uuidv4(),
        name: action.payload,
        done: false,
      };

      /* add the new todo in the existing todos */
      const newTodos = [...state.todos, newTodo];

      /* save the todos with newly added one item in the localStorage before
       returning the new state of the context */
      store(key, newTodos);
      return { ...state, todos: newTodos };

    case StuffActionTypes.UPDATE_STUFF_TODO:
      /* find the index of the object */
      const index = state.todos.findIndex((t) => t.id === action.payload);

      /* switch to the opposite state of the property done */
      state.todos[index].done = !state.todos[index].done;

      /* create a new todos in the heap */
      const updatedTodos = [...state.todos];

      /* save the updatedTodos in the localStorage
       * before returning the new state of the context */
      store(key, updatedTodos);
      return { ...state, todos: updatedTodos };

    default:
      return state;
  }
};
