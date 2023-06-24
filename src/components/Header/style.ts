import styled from "styled-components";

export const Wrapper = styled.header`
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100px;
  display: flex;
  justify-content: center;
`;

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0.7;
  height: 100%;
  width: 100%;
`;

export const Box = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-around;
  align-items: center;
  top: 50px;
  width: 80%;
  height: 100px;
  background-color: #f7f8f9;
  border: 4px solid #a0c9a2;
  border-radius: 50px;
`;

export const Logo = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 0 10px;
`;

export const LogoImg = styled.img`
  margin-right: 10px;
`;

export const LogoTextImg = styled.img``;

export const SearchInput = styled.input`
  width: 70%;
  background-color: #f0f3f0;
  border: none;
  border-radius: 20px;
  height: 65%;
  padding: 10px 10px 10px 20px;
  font-size: 30px;
  margin-right: 110px;
  &:focus {
    caret-color: #f0f3f0;
    outline: none;
  }
`;

export const SearchBtn = styled.div`
  position: absolute;
  cursor: pointer;
  padding: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  top: -4px;
  right: -4px;
  border: 4px solid #a0c9a2;
  background-color: #a0c9a2;
  width: 100px;
  height: 100%;
  border-radius: 50%;
  margin-left: 10px;
`;

export const SearchIcon = styled.img``;
