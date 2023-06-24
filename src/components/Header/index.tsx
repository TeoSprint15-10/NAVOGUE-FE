import * as S from "./style";
const searchIconUrl = new URL("/searchIcon.png", import.meta.url).href;
const logoImgUrl = new URL("/logo.svg", import.meta.url).href;
const logoTextImgUrl = new URL("/NAVOGUE.png", import.meta.url).href;

export default function Header() {
  return (
    <S.Wrapper>
      <S.Overlay />
      <S.Box>
        <S.Logo>
          <S.LogoImg src={logoImgUrl} alt="Logo" />
          <S.LogoTextImg src={logoTextImgUrl} alt="NAVOGUE" />
        </S.Logo>
        <S.SearchInput></S.SearchInput>
        <S.SearchBtn>
          <S.SearchIcon src={searchIconUrl} alt="Search Icon" />
        </S.SearchBtn>
      </S.Box>
    </S.Wrapper>
  );
}
