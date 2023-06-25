import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const ThumbnailImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const MetaDataContainer = styled.div`
  position: absolute;
  bottom: 0;
  height: 30px;
  background-color: white;
  width: 100%;
  border-top-left-radius: 11px;
  border-top-right-radius: 11px;
  padding: 10px 0px 4px 4px;
`;

export const MetaDataText = styled.p<{ size?: string }>`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  margin-top: 5px;
  font-size: ${(props) => (props.size === "small" ? "13px" : "15px")};
`;
