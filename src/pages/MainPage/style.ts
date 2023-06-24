import { styled } from "styled-components";

const Container = styled.div`
  position: relative;
  top: 25%;
  width: 100%;
  height: 100vh;

  display: flex;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 50px;
`;

export const S = {
  Container,
  MainContent,
};
