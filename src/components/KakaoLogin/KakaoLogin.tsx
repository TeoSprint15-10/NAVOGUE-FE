import { S } from "./style";
import logoImgUrl from "../../../public/assets/LOGIN_LOGO.png";
import KakaoLoginImgUrl from "../../../public/assets/KAKAO_LOGIN.png";

const KakaoLogin = () => {
  const Rest_api_key = import.meta.env.VITE_APP_KAKAO_CLIENT_ID;
  const redirect_uri = "https://main--gleeful-kulfi-17f59b.netlify.app";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;

  return (
    <S.LoginBox>
      <S.Slogan>내 메모를 스마트하게 태깅</S.Slogan>
      <S.LogoImg src={logoImgUrl} alt="LogoImg"></S.LogoImg>
      <S.KakaoLoginBtn onClick={() => (window.location.href = KAKAO_AUTH_URL)}>
        <S.KakaoImg src={KakaoLoginImgUrl} alt="KakaoImg"></S.KakaoImg>
        카카오 계정으로 로그인
        <S.Text />
      </S.KakaoLoginBtn>
    </S.LoginBox>
  );
};

export default KakaoLogin;
