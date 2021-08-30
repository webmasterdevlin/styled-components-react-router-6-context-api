import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #fafafa;
`;

export const SecondaryWrapper = styled.div`
  background-color: #fafafa;
  padding: 1rem;
`;

export const Header = styled.div`
  background-color: lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 2rem;
`;

/* I'm not super good at css, but I know how to google. =P */
/* codepen link: https://codepen.io/vescoyez/pen/wMyRLP */
export const Input = styled.input`
  margin-right: 1rem;
  font-family: inherit;
  border: 0;
  border-bottom: 1px solid #d2d2d2;
  outline: 0;
  font-size: 16px;
  color: #212121;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;
`;

export const AddButton = styled.button`
  background-color: #ff3f80;
  color: #fff;
  border: transparent;
  border-radius: 2px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);
  height: 2rem;
  width: auto;
  padding-left: 1rem;
  padding-right: 1rem;
  &:hover {
    background-color: #f44335;
  }
  &:disabled {
    background-color: lightgray;
    color: darkgray;
  }
`;
