/* action types to prevent typo errors */
export const WorkActionTypes = {
  GET_ALL_WORK_TODO: "GET_ALL_WORK_TODO",
  DELETE_WORK_TODO: "DELETE_WORK_TODO",
  ADD_WORK_TODO: "ADD_WORK_TODO",
  UPDATE_WORK_TODO: "UPDATE_WORK_TODO",
};

/* actions for reducers*/
export const getAllWorkTodoAction = () => {
  return { type: WorkActionTypes.GET_ALL_WORK_TODO };
};

/*
 *The payload is the convention in passing parameters.
 * We'll use object here to give type-safe in the reducer.
 * */
export const deleteWorkTodoAction = (id: string) => {
  return { type: WorkActionTypes.DELETE_WORK_TODO, payload: id };
};

export const addWorkTodoAction = (name: string) => {
  return { type: WorkActionTypes.ADD_WORK_TODO, payload: name };
};

export const updateWorkTodoAction = (id: string) => {
  return { type: WorkActionTypes.UPDATE_WORK_TODO, payload: id };
};
