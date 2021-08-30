import React, { ElementType, lazy, Suspense } from "react";
import { PartialRouteObject } from "react-router";

/*
 * Suspense is a component that wraps the custom components and enables them to communicate
 *  to React that they're waiting for some data to load before the component is rendered.
 * */
const Loadable = (Component: ElementType) => (props: any) =>
  (
    <Suspense fallback={<h1>Loading</h1>}>
      <Component {...props} />
    </Suspense>
  );

/* Lazy Loaded Todos Pages for code splitting*/
const WorkTodosPage = Loadable(lazy(() => import("./pages/WorkTodosPage")));
const ShoppingListPage = Loadable(
  lazy(() => import("./pages/ShoppingListPage"))
);
const StuffPage = Loadable(lazy(() => import("./pages/StuffPage")));

/* we will reuse this in creating todos */
export const pathNames: any = {
  work: "/",
  shoppingList: "/shopping-list",
  stuff: "/stuff",
};

/*
 *object-based routes
 *nesting routes is another way of writing routes
 */
const routes: PartialRouteObject[] = [
  {
    path: pathNames.work,
    element: <WorkTodosPage />,
  },
  {
    path: pathNames.shoppingList,
    element: <ShoppingListPage />,
  },
  {
    path: pathNames.stuff,
    element: <StuffPage />,
  },
];

export default routes;
