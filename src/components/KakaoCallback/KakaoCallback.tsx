import { useEffect } from "react";
import axios from "axios";

const KakaoCallback = () => {
  useEffect(() => {
    const params = new URL(document.location.toString()).searchParams;
    const code = params.get("code");
    const grant_type = "authorization_code";
    const Rest_api_key = import.meta.env.VITE_APP_KAKAO_CLIENT_ID;
    const redirect_uri = import.meta.env.VITE_APP_KAKAO_REDIRECT_URI;

    axios
      .post(
        `https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&code=${code}`,
        {},
        {
          headers: {
            "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
          },
        }
      )
      .then((res) => {
        console.log(res);
        // 백엔드 서버에 access_token 보내주는 로직
        // const { access_token } = res.data;
        // axios
        //   .post(
        //     `https://kapi.kakao.com/v2/user/me`,
        //     {},
        //     {
        //       headers: {
        //         Authorization: `Bearer ${access_token}`,
        //         "Content-type":
        //           "application/x-www-form-urlencoded;charset=utf-8",
        //       },
        //     }
        //   )
      });
    // .catch((Error: any) => {
    //   console.log("Error", Error);
    // });
    // .
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
