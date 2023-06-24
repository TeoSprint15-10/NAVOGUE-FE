import { styled } from "styled-components";

const LoginBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-diretion: column;
  border: 5px solid #a0c9a2;
  width: 100%;
  height: 100%;
  border-radius: 70px;
`;

const Slogan = styled.div`
  display: flex;
  justify-content: center;
`;

const KakaoLoginBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 237px;
  height: 49px;
  margin-top: 20px;
  margin-bottom: 30px;
  border: 2px solid #f0c23a;
  border-radius: 50px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
`;

const Text = styled.span`
  text-align: center;
`;

export const S = { LoginBox, Slogan, KakaoLoginBtn, Text };
