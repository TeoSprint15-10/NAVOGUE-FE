import { styled } from "styled-components";

const Container = styled.div`
  width: 200px;
  height: 100vh;
  background-color: aquamarine;
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    text-align: center;
    width: 120px;
    height: 40px;
    border: 1px solid black;
    line-height: 40px;
    margin-top: 20px;
    border-radius: 30px;
  }
`;

export const S = {
  Container,
};
