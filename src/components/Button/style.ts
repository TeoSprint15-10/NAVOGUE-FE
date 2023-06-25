import { styled } from "styled-components";
import { ButtonStyle } from ".";

const Container = styled.button<ButtonStyle>`
  cursor: pointer;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => (props.isClicked ? props.clickedColor : props.buttonColor)};
  border-radius: ${(props) => props.borderRadius};
  color: ${(props) => props.fontColor};
  font-size: ${(props) => props.fontSize};
  border: ${(props) => (props.borderColor ? `${props.borderWeight} solid ${props.borderColor}` : "none")};
  margin-bottom: ${(props) => props.marginBottom};
`;

export const S = {
  Container,
};
