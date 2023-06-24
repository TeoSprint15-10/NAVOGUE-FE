import * as S from "./style";
import searchIconUrl from "/assets/searchIcon.png";
import logoImgUrl from "/assets/logo.svg";
import logoTextImgUrl from "/assets/NAVOGUE.png";

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
