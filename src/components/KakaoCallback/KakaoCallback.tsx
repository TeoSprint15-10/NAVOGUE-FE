import { useEffect } from "react";
import axios from "axios";

const KakaoCallback = () => {
  useEffect(() => {
    const params = new URL(document.location.toString()).searchParams;
    const code = params.get("code");
    const BASE_URL = "https://courtney.reverof.p-e.kr:8443";

    axios
      .get(`${BASE_URL}/user/login?code=${code}`)
      .then((res) => {
        console.log(res.data.accessToken);
        const data = res.data.accessToken;
        localStorage.setItem("token", data);
        window.location.href =
          "https://main--gleeful-kulfi-17f59b.netlify.app/oauth";
      })
      .catch((error) => {
        console.error("API 요청 에러", error.response);
      });
  }, []);

  return (
    <>
      <div>
        <h1>성공했나</h1>
      </div>
    </>
  );
};

export default KakaoCallback;
