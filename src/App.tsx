import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Layout from "./components/Layout";
import GlobalStyle from "./styles/globalStyle";
import { RecoilRoot } from "recoil";
import { MemoProvider } from "./context/MemoContext";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import Router from "./routes/Router";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {},
  });

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <MemoProvider>
          <Layout>
            <Router />
          </Layout>
        </MemoProvider>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default App;
