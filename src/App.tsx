import React from "react";
import { useRoutes } from "react-router";

import routes from "./Routes";
import GlobalContext from "./contexts";

/* React Router 6!
 * added the history package for React Router 6
 *
 * Removed the unnecessary React.FC
 * because TypeScript can infer what the component is returning.
 * You can when you hover your mouse on the component, it says JSX.Element
 * */
const App = () => {
  // used only useRoutes() in the context of a <Router> component.
  const content = useRoutes(routes);
  return (
    <>
      {/* other providers here such as themes, state management, authentication, etc. */}
      <GlobalContext>{content}</GlobalContext>
    </>
  );
};

export default App;
