import { UrlMemo } from "../../../types";
import * as S from "./style";

interface UrlThumbnailProps {
  card: UrlMemo;
}

export default function UrlThumbnail({
  card: {
    openGraph: {
      memo: { content },
      ogImageUrl,
      ogTitle,
    },
  },
}: UrlThumbnailProps) {
  return (
    <S.Container to={content}>
      <S.ThumbnailImg src={ogImageUrl} />
      <S.MetaDataContainer>
        <S.MetaDataText>{ogTitle}</S.MetaDataText>
        <S.MetaDataText size="small">{content}</S.MetaDataText>
      </S.MetaDataContainer>
    </S.Container>
  );
}
