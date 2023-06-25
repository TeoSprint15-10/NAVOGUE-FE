import { styled } from "styled-components";

const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Added this line to evenly distribute space */
  align-items: center;
  border: 5px solid #a0c9a2;
  width: 600px;
  height: 700px;
  border-radius: 70px;
  margin: 200px auto;
`;

const Slogan = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; /* Added this line to center vertically */
  margin-top: 20px; /* Adjust this value for desired spacing */
`;

const KakaoLoginBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 237px;
  height: 49px;
  margin-top: 50px;
  margin-bottom: 30px;
  border: 2px solid #f0c23a;
  border-radius: 50px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  margin: 20px auto;
`;

const Text = styled.span`
  text-align: center;
`;

const LogoImg = styled.img`
  width: 200px;
  height: 250px;
  margin-bottom: 100px;
`;

const KakaoImg = styled.img`
  width: 22px;
  height: 22px;
  margin-right: 10px;
`;

export const logoImgUrl = styled.img``;
export const KakaoLoginImgUrl = styled.img``;

export const S = {
  LoginBox,
  Slogan,
  KakaoLoginBtn,
  Text,
  LogoImg,
  KakaoImg,
};
