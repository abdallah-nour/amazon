import * as S from "./style";

import { Column, Row } from "../../Container";

import { LinkFooter } from "../style";
import React from "react";
import rows from "./rows";

export default function Section2() {
  return (
    <S.Container>
      <S.Row max_width="1060px" sm={4} xs={2}>
        {rows.forEach((row) => {
          row.forEach((arr, index) => {
            return (
              <Column key={index}>
                <S.Cell>
                  <S.CellHeader>{arr[0]}</S.CellHeader>
                  <S.CellBody>{arr[1]}</S.CellBody>
                </S.Cell>
              </Column>
            );
          });
        })}
      </S.Row>
      <S.CopyAndRights>
        <Row lg={12}>
          <Column lg={2} sm={4}>
            <LinkFooter underline_color="white">Conditions of Use</LinkFooter>
          </Column>
          <Column lg={2} sm={4}>
            <LinkFooter underline_color="white">Privacy Notice</LinkFooter>
          </Column>
          <Column lg={2} sm={4}>
            <LinkFooter underline_color="white">Interest-Based Ads</LinkFooter>
          </Column>
          <Column lg={6} sm={12}>
            <S.CopyARTxt>
              © 1996-2020, Amazon.com, Inc. or its affiliates
            </S.CopyARTxt>
          </Column>
        </Row>
      </S.CopyAndRights>
    </S.Container>
  );
}
// https://images-na.ssl-images-amazon.com/images/G/01/personalization/ybh/loading-4x-gray._CB485916920_.gif
