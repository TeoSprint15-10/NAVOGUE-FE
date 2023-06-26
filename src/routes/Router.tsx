import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import MainPage from "../pages/MainPage";
import NotFoundPage from "../pages/NotFoundPage";
import KakaoCallback from "../components/KakaoCallback/KakaoCallback";
import { PATH_NAME } from "../constants/route";
import { loginState } from "../recoil/atoms/loginState";
import { useRecoilState } from "recoil";

const Router = () => {
  const [isLogin, setIsLogin] = useRecoilState(loginState);
  console.log(isLogin);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={PATH_NAME.LOGIN}
          element={isLogin ? <MainPage /> : <LoginPage />}
        />
        <Route
          path={PATH_NAME.MAIN}
          element={isLogin ? <MainPage /> : <LoginPage />}
        />

        <Route
          path={PATH_NAME.KAKAOCALLBACK}
          element={isLogin ? <MainPage /> : <KakaoCallback />}
        />
        <Route path={PATH_NAME.NOT_FOUND} element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
