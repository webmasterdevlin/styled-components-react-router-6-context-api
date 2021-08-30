/* action types to prevent typo errors */
export const ShoppingListActionTypes = {
  GET_ALL_SHOPPING_LIST_TODO: "GET_ALL_SHOPPING_LIST_TODO",
  DELETE_SHOPPING_LIST_TODO: "DELETE_SHOPPING_LIST_TODO",
  ADD_SHOPPING_LIST_TODO: "ADD_SHOPPING_LIST_TODO",
  UPDATE_SHOPPING_LIST_TODO: "UPDATE_SHOPPING_LIST_TODO",
};

/* actions for reducers*/
export const getAllShoppingListTodoAction = () => {
  return { type: ShoppingListActionTypes.GET_ALL_SHOPPING_LIST_TODO };
};

/*
 *The payload is the convention in passing parameters.
 * We'll use object here to give type-safe in the reducer.
 * */
export const deleteShoppingListTodoAction = (id: string) => {
  return {
    type: ShoppingListActionTypes.DELETE_SHOPPING_LIST_TODO,
    payload: id,
  };
};

export const addShoppingListTodoAction = (name: string) => {
  return {
    type: ShoppingListActionTypes.ADD_SHOPPING_LIST_TODO,
    payload: name,
  };
};

export const updateShoppingListTodoAction = (id: string) => {
  return {
    type: ShoppingListActionTypes.UPDATE_SHOPPING_LIST_TODO,
    payload: id,
  };
};
