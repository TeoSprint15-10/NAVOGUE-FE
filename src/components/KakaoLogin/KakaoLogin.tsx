import { S } from "./style";
import { Rest_api_key, redirect_uri } from "./kakaoLoginData";

const KakaoLogin = () => {
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;

  return (
    <S.LoginBox>
      {/* <S.Slogan>내 메모를 스마트하게 태깅</S.Slogan> */}
      <S.KakaoLoginBtn>
        <S.Text onClick={() => (window.location.href = KAKAO_AUTH_URL)}>
          카카오 계정으로 로그인
        </S.Text>
      </S.KakaoLoginBtn>
    </S.LoginBox>
  );
};

export default KakaoLogin;
