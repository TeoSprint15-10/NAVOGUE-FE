import styled from "styled-components";

export const Container = styled.li`
  position: relative;
  width: 23%;
  height: 240px;
  background-color: white;
  border-radius: 10px;
  padding: 10px;
  margin-right: 50px;
  margin-bottom: 50px;
`;

export const MenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 30px;
  width: 100%;
`;

export const TextMemoContentWrapper = styled.div`
  width: 100%;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 8;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const UrlMemoContentWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 165px;
  cursor: pointer;
`;

export const TagWrapper = styled.div`
  position: absolute;
  bottom: 0;
  margin-top: 10px;
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  gap: 4px;
`;
