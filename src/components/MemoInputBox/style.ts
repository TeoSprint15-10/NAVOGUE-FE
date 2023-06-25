import { styled } from "styled-components";

const Container = styled.div`
  width: 80%;
  border: 3px solid #a0c9a2;
  height: 200px;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  padding: 20px;
  margin-bottom: 40px;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 80%;
  border: none;
  padding: 10px;
  border: none;
  resize: none;
  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  width: 104px;
  height: 47px;
  background-color: #a0c9a2;
  margin-left: auto;
  cursor: pointer;
  border-radius: 30px;
  border: none;
  cursor: pointer;
  margin-top: 10px;
`;

export const S = { Container, TextArea, Button };
