import { styled } from "styled-components";

const Container = styled.div`
  position: relative;
  width: 80%;
  border: 3px solid #a0c9a2;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 20px;
  padding: 20px;
  margin-bottom: 40px;
  background-color: white;
`;

const TextArea = styled.textarea`
  height: 65%;
  border: none;
  padding: 10px;
  border: none;
  resize: none;
  background-color: white;
  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  cursor: pointer;
  position: absolute;
  margin-top: 10px;
  color: white;
  right: 10px;
  bottom: 10px;
  width: 104px;
  height: 47px;
  background-color: #a0c9a2;
  margin-left: auto;
  border-radius: 30px;
  border: none;
`;

export const S = { Container, TextArea, Button };
