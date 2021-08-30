import React, { useReducer, ReactNode } from "react";

import WorkTodoContext from "./work/work-todo-context";
import ShoppingListTodoContext from "./shopping-list/shopping-list-todo-context";
import StuffTodoContext from "./stuff/stuff-todo-context";
import { workReducer } from "./work/workReducer";
import {
  addWorkTodoAction,
  deleteWorkTodoAction,
  getAllWorkTodoAction,
  updateWorkTodoAction,
} from "./work/workActions";
import { shoppingListReducer } from "./shopping-list/shoppingListReducer";
import {
  addShoppingListTodoAction,
  deleteShoppingListTodoAction,
  getAllShoppingListTodoAction,
  updateShoppingListTodoAction,
} from "./shopping-list/shoppingListActions";
import { stuffReducer } from "./stuff/stuffReducer";
import {
  addStuffTodoAction,
  deleteStuffTodoAction,
  getAllStuffTodoAction,
  updateStuffTodoAction,
} from "./stuff/stuffActions";

// a reusable initialValue because the initial values for the 3 reducers are the same
const initialValue = {
  todos: [],
};

type Props = {
  children: ReactNode;
};

const GlobalContext = ({ children }: Props) => {
  /* we don't want to use the word dispatch because there are 3 reducers here.
   * Otherwise, there will be name clashing or name conflict */

  /*a state and a dispatch for workReducer*/
  const [workTodoState, workDispatch] = useReducer(workReducer, initialValue);

  /*a state and a dispatch for shoppingListReducer*/
  const [shoppingListState, shoppingListDispatch] = useReducer(
    shoppingListReducer,
    initialValue
  );

  /*a state and a dispatch for stuffReducer*/
  const [stuffTodoState, stuffDispatch] = useReducer(
    stuffReducer,
    initialValue
  );

  return (
    <WorkTodoContext.Provider
      // the object being pass in the value props below must be the same type
      // of the defaultValue from the work context
      value={{
        todos: workTodoState.todos,
        getAllWorkTodo: () => workDispatch(getAllWorkTodoAction()),
        deleteWorkTodo: (id) => workDispatch(deleteWorkTodoAction(id)),
        addWorkTodo: (name) => workDispatch(addWorkTodoAction(name)),
        updateWorkTodo: (id) => workDispatch(updateWorkTodoAction(id)),
      }}
    >
      <ShoppingListTodoContext.Provider
        // the object being pass in the value props below must be the same type
        // of the defaultValue from the shopping-list context
        value={{
          todos: shoppingListState.todos,
          getAllShoppingListTodo: () =>
            shoppingListDispatch(getAllShoppingListTodoAction()),
          deleteShoppingListTodo: (id) =>
            shoppingListDispatch(deleteShoppingListTodoAction(id)),
          addShoppingListTodo: (name) =>
            shoppingListDispatch(addShoppingListTodoAction(name)),
          updateShoppingListTodo: (id) =>
            shoppingListDispatch(updateShoppingListTodoAction(id)),
        }}
      >
        <StuffTodoContext.Provider
          // the object being pass in the value props below must be the same type
          // of the defaultValue from the stuff context
          value={{
            todos: stuffTodoState.todos,
            getAllStuffTodo: () => stuffDispatch(getAllStuffTodoAction()),
            deleteStuffTodo: (id) => stuffDispatch(deleteStuffTodoAction(id)),
            addStuffTodo: (name) => stuffDispatch(addStuffTodoAction(name)),
            updateStuffTodo: (id) => stuffDispatch(updateStuffTodoAction(id)),
          }}
        >
          {children}
        </StuffTodoContext.Provider>
      </ShoppingListTodoContext.Provider>
    </WorkTodoContext.Provider>
  );
};

export default GlobalContext;
