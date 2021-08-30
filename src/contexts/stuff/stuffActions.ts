/* action types to prevent typo errors */
export const StuffActionTypes = {
  GET_ALL_STUFF_TODO: "GET_ALL_STUFF_TODO",
  DELETE_STUFF_TODO: "DELETE_STUFF_TODO",
  ADD_STUFF_TODO: "ADD_STUFF_TODO",
  UPDATE_STUFF_TODO: "UPDATE_STUFF_TODO",
};

/* actions for reducers*/
export const getAllStuffTodoAction = () => {
  return { type: StuffActionTypes.GET_ALL_STUFF_TODO };
};

/*
 *The payload is the convention in passing parameters.
 * We'll use object here to give type-safe in the reducer.
 * */
export const deleteStuffTodoAction = (id: string) => {
  return { type: StuffActionTypes.DELETE_STUFF_TODO, payload: id };
};

export const addStuffTodoAction = (name: string) => {
  return { type: StuffActionTypes.ADD_STUFF_TODO, payload: name };
};

export const updateStuffTodoAction = (id: string) => {
  return { type: StuffActionTypes.UPDATE_STUFF_TODO, payload: id };
};
