/*I preferred Todo than interface
 *in writing models in functional React components.
 * The interface and type are almost the same, but differ in one thing.
 * You can update the properties of the interface
 * by duplicating the interface, but that's not going to work
 * with type.
 *
 * For example,
 * The below interfaces will merge
 *
 * interface Dog {
 *  name: string;
 * }
 *
 * interface Dog {
 *  age: string;
 * }
 *
 * While below types will show squiggles under both type Dogs
 * saying duplicate identifier Dog
 *
 * type Dog = {
 *  name: string
 * }
 *
 * type Dog = {
 *  age: string
 * }
 *
 * */
export type Todo = {
  id: string;
  name: string;
  done: boolean;
};
