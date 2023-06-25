import styled from "styled-components";

const Container = styled.div`
  width: 23%;
  height: 240px;
  background-color: #f7f8f9;
  border-radius: 10px;
  padding: 10px;
  margin-right: 50px;
  margin-bottom: 50px;
`;

const MenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 50px;
  width: 100%;
`;

const Content = styled.div`
  width: 100%;
  height: 150px;
  background-color: white;
  cursor: pointer;
`;

const TagWrapper = styled.div`
  margin-top: 10px;
  width: 100%;
  display: flex;
  height: 50px;
`;

export const S = {
  Container,
  MenuWrapper,
  TagWrapper,
  Content,
};
