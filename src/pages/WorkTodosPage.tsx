import React, { useContext, useEffect } from "react";
import {
  BookOpen as BookOpenIcon,
  Check as CheckIcon,
  Circle as CircleIcon,
} from "react-feather"; // added package for icons

import Work from "../contexts/work/work-todo-context";
import MainLayout from "../views/MainLayout";
import * as S from "./Pages.style";

const WorkTodosPage = () => {
  /*destructuring the work context*/
  const { todos, getAllWorkTodo, deleteWorkTodo, updateWorkTodo } =
    useContext(Work);

  /* fetching the data from the local storage after components have rendered*/
  useEffect(() => {
    getAllWorkTodo();
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
      <h1>Your Work Todos</h1>
      <div>
        {todos.map((t) => (
          <S.ItemWrapper key={t.id}>
            <div>
              {/*show check icon if todo done is true*/}
              {t.done ? (
                <S.IconWrapper>
                  <CheckIcon onClick={() => updateWorkTodo(t.id)} />
                </S.IconWrapper>
              ) : (
                <S.IconWrapper>
                  <CircleIcon onClick={() => updateWorkTodo(t.id)} />
                </S.IconWrapper>
              )}
            </div>
            <S.ItemName
              done={t.done}
              onClick={() => {
                /*delete if todo is done*/
                if (t.done) deleteWorkTodo(t.id);
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

export default WorkTodosPage;
