import { S } from "./style";
import Button from "../Button";

import useTagList from "../../hooks/queries/tagList";
const Sidebar = () => {
  const { data: tagList } = useTagList();

  return (
    <S.Container>
      {tagList.map((e: any, idx: number) => (
        <Button type={"SIDEBAR"} text={e} key={idx} />
      ))}
    </S.Container>
  );
};

export default Sidebar;
