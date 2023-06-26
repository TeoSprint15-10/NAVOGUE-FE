import { S } from "./style";
import Button from "../Button";
import { useRecoilState } from "recoil";
import useTagList from "../../hooks/queries/tagList";
import { filterState } from "../../recoil/atoms/filterState";
const Sidebar = () => {
  const { data: tagList, isLoading } = useTagList();
  const [filterInfo, setFilterInfo] = useRecoilState(filterState);

  if (isLoading) return <div>Loading...</div>;
  const onClickBtn = (info: any) => {
    setFilterInfo({ triggerType: "tag", target: info });
  };
  console.log(tagList);

  return (
    <S.Container>
      {tagList.map((e: any, idx: number) => (
        <Button onClick={() => onClickBtn(e)} type={"SIDEBAR"} text={e} key={idx} />
      ))}
    </S.Container>
  );
};

export default Sidebar;
