import { useEffect } from "react";
import axios from "axios";

const KakaoCallback = () => {
  useEffect(() => {
    // const grant_type = "authorization_code";
    // const Rest_api_key = import.meta.env.VITE_APP_KAKAO_CLIENT_ID;
    // const redirect_uri = import.meta.env.VITE_APP_KAKAO_REDIRECT_URI;
    const params = new URL(document.location.toString()).searchParams;
    const code = params.get("code");
    const BASE_URL = "http://courtney.reverof.p-e.kr:8080";

    axios
      .get(`${BASE_URL}/user/login?code=${code}`)
      .then((res) => {
        console.log(res.data.accessToken);
        const data = res.data.accessToken;
        localStorage.setItem("token", JSON.stringify(data));
        window.location.href = "http://localhost:5173";
      })
      .catch((error) => {
        console.error("API 요청 에러", error.response);
      });
  }, []);

  const removeToken = () => {
    localStorage.removeItem("token");
  };

  return (
    <>
      <div>
        <h1>성공했나</h1>
      </div>
    </>
  );
};

export default KakaoCallback;
