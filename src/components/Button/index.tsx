import React from "react";
import { S } from "./style";

// 메모추가 버튼
// 사이드바 태그버튼
// 컨텐츠박스 태그
// 필터링 버튼

export interface ButtonStyle {
  width?: string;
  height?: string;
  buttonColor?: string;
  borderRadius?: string;
  borderColor?: string;
  fontColor?: string;
  fontSize?: string;
  text: string;
  borderWeight?: string;
  marginBottom?: string;
  isClicked?: boolean;
  clickedColor?: string;
}

interface IButtonProps {
  type: "SIDEBAR" | "MEMO" | "TAG" | "FILTER" | "TAG_ADD";
  text: string;
  isClicked?: boolean;
  onClick?: () => void;
}

const BUTTON_TYPE = {
  SIDEBAR: {
    width: "124px",
    height: "40px",
    borderRadius: "20px",
    borderColor: "#D8D8D8",
    buttonColor: "#FFFFFF ",
    borderWeight: "2px",
    marginBottom: "10px",
  },
  MEMO: {
    width: "104px",
    height: "47px",
    borderRadius: "30px",
    buttonColor: "#a0c9a2",
  },
  TAG: {
    width: "64px",
    height: "33px",
    borderRadius: "20px",
    buttonColor: "#EFEEEE",
  },
  FILTER: {
    width: "64px",
    height: "33px",
    borderRadius: "20px",
    borderColor: "#A0C9A2",
    buttonColor: "#FFFFFF ",
    clickedColor: "#A0C9A2",
    borderWeight: "2px",
  },
  TAG_ADD: {
    width:"33px",
    height:"33px",
    borderRadius: "20px",
    buttonColor: "#EFEEEE ",
  },
};

function Button({ ...props }: IButtonProps) {
  const style = BUTTON_TYPE[props.type] as ButtonStyle;
  return (
    <S.Container onClick={props.onClick} {...style} isClicked={props.isClicked}>
      {props.text}
    </S.Container>
  );
}

export default Button;
