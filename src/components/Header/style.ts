import styled from "styled-components";

export const Wrapper = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100px;
  display: flex;
  justify-content: center;
`;

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  height: 100%;
  width: 100%;
`;

export const Box = styled.div`
  position: absolute;
  top: 59px;
  width: 80%;
  height: 100px;
  border: 4px solid;
  border-radius: 50px;
`;
