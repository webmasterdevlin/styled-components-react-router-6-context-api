import React, { useContext, useEffect } from "react";
import {
  Check as CheckIcon,
  Circle as CircleIcon,
  BookOpen as BookOpenIcon,
} from "react-feather"; // added package for icons

import ShoppingList from "../contexts/shopping-list/shopping-list-todo-context";
import MainLayout from "../views/MainLayout";
import * as S from "./Pages.style";

const ShoppingListPage = () => {
  /*destructuring the shopping-list context*/
  const {
    todos,
    getAllShoppingListTodo,
    deleteShoppingListTodo,
    updateShoppingListTodo,
  } = useContext(ShoppingList);

  /* fetching the data from the local storage after components have rendered*/
  useEffect(() => {
    getAllShoppingListTodo();
  }, []);

  /* show a helpful message if empty todos */
  if (todos.length === 0)
    return (
      <MainLayout>
        <h2>
          <BookOpenIcon /> Empty todos . Start adding.
        </h2>
      </MainLayout>
    );

  return (
    <MainLayout>
      <h1>Your Shopping List Todos</h1>
      <div>
        {todos.map((t) => (
          <S.ItemWrapper key={t.id}>
            <div>
              {/*show check icon if todo done is true*/}
              {t.done ? (
                <S.IconWrapper>
                  <CheckIcon onClick={() => updateShoppingListTodo(t.id)} />
                </S.IconWrapper>
              ) : (
                <S.IconWrapper>
                  <CircleIcon onClick={() => updateShoppingListTodo(t.id)} />
                </S.IconWrapper>
              )}
            </div>
            <S.ItemName
              done={t.done}
              onClick={() => {
                /*delete if todo is done*/
                if (t.done) deleteShoppingListTodo(t.id);
              }}
            >
              {t.name}
            </S.ItemName>
          </S.ItemWrapper>
        ))}
      </div>
    </MainLayout>
  );
};

export default ShoppingListPage;
