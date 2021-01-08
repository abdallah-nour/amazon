import * as S from "./style";

import { CustomLink, H, P } from "../Txt";

import { Link } from "react-router-dom";
import React from "react";

export default function Card({
  headerImg,
  title,
  subTitle,
  imgMaxHeight,
  imgFit,
  linkTxt,
  children,
}) {
  return (
    <S.CardContainer>
      <S.Content>
        <S.Header>
          {headerImg && <S.HeaderImg src={headerImg} alt="" />}
          <H size="20px" fontWeight="700">
            {title}
          </H>
        </S.Header>
        {subTitle && (
          <P size="13px" weight="700" margin="0 0 14px">
            {subTitle}
          </P>
        )}
        <S.Body imgMaxHeight={imgMaxHeight} imgFit={imgFit}>
          <Link to="/">{children}</Link>
        </S.Body>
        <S.Footer>
          <CustomLink color="#007185" size="13px">
            {linkTxt}
          </CustomLink>
        </S.Footer>
      </S.Content>
    </S.CardContainer>
  );
}
