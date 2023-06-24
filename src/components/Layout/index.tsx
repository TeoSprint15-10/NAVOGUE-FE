import Header from "../Header";
import { Wrapper } from "./layout.style";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <Wrapper>
      <Header />
      <main>{props.children}</main>
    </Wrapper>
  );
}
