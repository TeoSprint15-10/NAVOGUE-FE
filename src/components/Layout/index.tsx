import Header from "../Header";
import * as S from "./style";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <S.Wrapper>
      {/* <Header /> */}
      <main>{props.children}</main>
    </S.Wrapper>
  );
}
