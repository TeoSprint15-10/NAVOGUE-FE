import { S } from "./style";
import Button from "../Button";
import useContentTypeFilter from "../../hooks/useContentTypeFilter";
export default function FilterCheckbox() {
  const { crntFilterState, onClickType } = useContentTypeFilter();

  return (
    <S.Container>
      <Button isClicked={crntFilterState[0]} onClick={() => onClickType(0)} type={"FILTER"} text={"All"} />
      <Button isClicked={crntFilterState[1]} onClick={() => onClickType(1)} type={"FILTER"} text={"URL"} />
      <Button isClicked={crntFilterState[2]} onClick={() => onClickType(2)} type={"FILTER"} text={"TEXT"} />
    </S.Container>
  );
}
