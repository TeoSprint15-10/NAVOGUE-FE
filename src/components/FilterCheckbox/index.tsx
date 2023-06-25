import { S } from "./style";
import Button from "../Button";
import useContentTypeFilter from "../../hooks/useContentTypeFilter";
export default function FilterCheckbox() {
  const { crntFilterState, onClickType, FILTER_TYPE } = useContentTypeFilter();

  return (
    <S.Container>
      {FILTER_TYPE.map((e, idx) => (
        <Button isClicked={crntFilterState[idx]} onClick={() => onClickType(idx)} type={"FILTER"} text={e} />
      ))}
    </S.Container>
  );
}
