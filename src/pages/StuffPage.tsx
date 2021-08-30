import React, { useContext, useEffect } from "react";
import {
  BookOpen as BookOpenIcon,
  Check as CheckIcon,
  Circle as CircleIcon,
} from "react-feather"; // added package for icons

import Stuff from "../contexts/stuff/stuff-todo-context";
import MainLayout from "../views/MainLayout";
import * as S from "./Pages.style";

const StuffPage = () => {
  /*destructuring the stuff context*/
  const { todos, getAllStuffTodo, deleteStuffTodo, updateStuffTodo } =
    useContext(Stuff);

  /* fetching the data from the local storage after components have rendered*/
  useEffect(() => {
    getAllStuffTodo();
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
      <h1>Your Stuff Todos</h1>
      <div>
        {todos.map((t) => (
          <S.ItemWrapper key={t.id}>
            <div>
              {/*show check icon if todo done is true*/}
              {t.done ? (
                <S.IconWrapper>
                  <CheckIcon onClick={() => updateStuffTodo(t.id)} />
                </S.IconWrapper>
              ) : (
                <S.IconWrapper>
                  <CircleIcon onClick={() => updateStuffTodo(t.id)} />
                </S.IconWrapper>
              )}
            </div>
            <S.ItemName
              done={t.done}
              onClick={() => {
                /*delete if todo is done*/
                if (t.done) deleteStuffTodo(t.id);
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

export default StuffPage;
