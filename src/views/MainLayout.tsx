import React, {
  ChangeEvent,
  FormEvent,
  ReactNode,
  useContext,
  useState,
} from "react";
import { useLocation } from "react-router-dom";

import NavigationBar from "../components/NavigationBar";
import { pathNames } from "../Routes";
import ShopList from "../contexts/shopping-list/shopping-list-todo-context";
import Stuff from "../contexts/stuff/stuff-todo-context";
import Work from "../contexts/work/work-todo-context";

/* S or s are the writing conventions in importing styled components*/
import * as S from "./MainLayout.style";

/*for containment of any pages*/
type Props = {
  children?: ReactNode;
};
/*
 * MainLayout for putting the Header, Form, and Button above the NavigationBar
 * then the content of every page below the NavigationBar
 * */
const MainLayout = ({ children }: Props) => {
  const { pathname } = useLocation(); // get the current url path
  const { addWorkTodo } = useContext(Work); // for work context
  const { addShoppingListTodo } = useContext(ShopList); // for shop-list context
  const { addStuffTodo } = useContext(Stuff); // for stuff context

  const [name, setName] = useState("");

  const handleInputChange = ({
    currentTarget,
  }: ChangeEvent<HTMLInputElement>) => {
    setName(currentTarget.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // a simple validation
    if (name.length <= 2) return;

    // choosing which dispatch to send based on the current path
    switch (pathname) {
      case pathNames.work:
        addWorkTodo(name);
        break;
      case pathNames.shoppingList:
        addShoppingListTodo(name);
        break;
      case pathNames.stuff:
        addStuffTodo(name);
        break;
    }

    // emptying the input field after saving
    setName("");
  };

  return (
    <S.Wrapper>
      <S.Header>
        {/* emojipedia.org */}
        <h1>Code Test 👩🏽‍💻</h1>
      </S.Header>
      <S.SecondaryWrapper>
        <S.Form onSubmit={handleSubmit}>
          <S.Input
            value={name}
            onChange={handleInputChange}
            placeholder={"Create new todo..."}
          />
          {/*disabling button of number of characters is less than 3*/}
          <S.AddButton disabled={name.length <= 2} type="submit">
            + ADD
          </S.AddButton>
        </S.Form>

        <NavigationBar />
        {children}
      </S.SecondaryWrapper>
    </S.Wrapper>
  );
};

export default MainLayout;
