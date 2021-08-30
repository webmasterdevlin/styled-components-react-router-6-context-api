import { createContext } from "react";
import { Todo } from "../../models/todoType";

/*the defaultValue-object argument in the below createContext will
 * will require a value in the provider.
 * The value of the Provider needs to have the same type as the argument.
 *  */
export default createContext({
  todos: [] as Todo[],
  getAllStuffTodo: () => {},
  deleteStuffTodo: (id: string) => {},
  addStuffTodo: (name: string) => {},
  updateStuffTodo: (id: string) => {},
});
