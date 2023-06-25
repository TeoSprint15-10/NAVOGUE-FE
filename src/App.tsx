import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import NotFoundPage from "./pages/NotFoundPage";
import KakaoCallback from "./components/KakaoCallback/KakaoCallback";
import Layout from "./components/Layout";
import { PATH_NAME } from "./constants/route";
import GlobalStyle from "./styles/globalStyle";
import { MemoProvider } from "./context/MemoContext";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {},
  });

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <MemoProvider>
        <Layout>
          <BrowserRouter>
            <Routes>
              <Route path={PATH_NAME.LOGIN} element={<LoginPage />} />
              {/* <Route
                path={PATH_NAME.KAKAOCALLBACK}
                element={<KakaoCallback />}
              /> */}
              <Route path={PATH_NAME.MAIN} element={<MainPage />} />
              <Route path={PATH_NAME.NOT_FOUND} element={<NotFoundPage />} />
            </Routes>
          </BrowserRouter>
        </Layout>
      </MemoProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
