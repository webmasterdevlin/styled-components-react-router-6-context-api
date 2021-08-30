import styled from "styled-components";

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const IconWrapper = styled.div`
  margin-right: 1rem;
`;

/*adding active props to toggle color and mouse cursor*/
export const ItemName = styled.span<{ done: boolean }>`
  color: ${(p) => (p.done ? "grey" : "black")};
  cursor: ${(p) => (p.done ? "pointer" : "auto")};
  text-transform: capitalize;
`;
