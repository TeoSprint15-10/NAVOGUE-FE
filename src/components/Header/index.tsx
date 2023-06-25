import * as S from "./style";
import { ChangeEvent, useContext, useState } from "react";
import searchIconUrl from "/assets/searchIcon.png";
import logoImgUrl from "../../../public/assets/logo.svg";
import logoTextImgUrl from "/assets/NAVOGUE.png";
import { getMemoSearchedList } from "../../api/memo";
import { MemoContext } from "../../context/MemoContext";

export default function Header() {
  const { memoList, setMemoList } = useContext(MemoContext);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = async (): Promise<void> => {
    const data = await getMemoSearchedList(searchQuery);
    setMemoList(data);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchQuery(event.target.value);
  };

  return (
    <S.Wrapper>
      <S.Overlay />
      <S.Box>
        <S.Logo>
          <S.LogoImg src={logoImgUrl} alt="Logo" />
          <S.LogoTextImg src={logoTextImgUrl} alt="NAVOGUE" />
        </S.Logo>
        <S.SearchInput value={searchQuery} onChange={handleChange} />
        <S.SearchBtn onClick={handleSearch}>
          <S.SearchIcon src={searchIconUrl} alt="Search Icon" />
        </S.SearchBtn>
      </S.Box>
    </S.Wrapper>
  );
}
