import { S } from "./style";
import Button from "../Button";

const Sidebar = () => {
  return (
    <S.Container>
      <Button type={"SIDEBAR"} text={"test"} />
      <Button type={"SIDEBAR"} text={"test"} />
      <Button type={"SIDEBAR"} text={"test"} />
      <Button type={"SIDEBAR"} text={"test"} />
    </S.Container>
  );
};

export default Sidebar;
