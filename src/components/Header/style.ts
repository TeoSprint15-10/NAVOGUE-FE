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
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  opacity: 0.8;
  height: 100%;
  width: 100%;
`;

export const Box = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-around;
  align-items: center;
  top: 60px;
  width: 80%;
  height: 80px;
  background-color: #f7f8f9;
  border: 3px solid #a0c9a2;
  border-radius: 50px;
`;

export const Logo = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 0 10px;
`;

export const LogoImg = styled.img`
  cursor: pointer;
  margin-right: 10px;
`;

export const LogoTextImg = styled.img`
  cursor: pointer;
`;

export const SearchInput = styled.input`
  width: 60%;
  background-color: #f0f3f0;
  color: #536e55;
  border: none;
  border-radius: 20px;
  height: 60%;
  padding: 10px 10px 10px 20px;
  font-size: 20px;
  margin-right: 110px;
  &:focus {
    caret-color: #a0c9a2;
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
  top: -3px;
  right: -3px;
  border: 3px solid #a0c9a2;
  background-color: #a0c9a2;
  width: 80px;
  height: 100%;
  border-radius: 50%;
  margin-left: 10px;
`;

export const SearchIcon = styled.img`
  width: 40%;
  height: 40%;
`;

export const loginImg = styled.img`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 0 10px;
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 1;
  cursor: pointer;
`;
