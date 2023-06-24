import { useEffect } from "react";
import { Rest_api_key, redirect_uri } from "../KakaoLogin/kakaoLoginData";
import axios from "axios";

const KakaoCallback = () => {
  useEffect(() => {
    const params = new URL(document.location.toString()).searchParams;
    const code = params.get("code");
    const grant_type = "authorization_code";

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
        //   .then((res: any) => {
        //     console.log("2번쨰", res);
        //   });
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
