import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { pathNames } from "../Routes";

/* S or s are the writing conventions in importing styled components*/
import * as S from "./NavigationBar.style";

const NavigationBar = () => {
  const navigate = useNavigate(); // from React Router 6
  const { pathname } = useLocation(); // to get current url path

  return (
    <div>
      <div>
        <S.NavButton
          active={pathNames.work == pathname}
          onClick={() => {
            navigate(pathNames.work);
          }}
        >
          WORK TODOS
        </S.NavButton>
        <S.NavButton
          active={pathNames.shoppingList == pathname}
          onClick={() => navigate(pathNames.shoppingList)}
        >
          SHOPPING LIST
        </S.NavButton>
        <S.NavButton
          active={pathNames.stuff == pathname}
          onClick={() => navigate(pathNames.stuff)}
        >
          STUFF
        </S.NavButton>
      </div>
    </div>
  );
};

export default NavigationBar;
