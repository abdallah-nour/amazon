import * as S from "./style";
import * as Txt from "../../components/Txt";

import { FaFolder, FaRegQuestionCircle } from "react-icons/fa";

import { IconContext } from "react-icons";

export default function index() {
  return (
    <S.Container>
      <S.Content>
        <S.NumberContainer>
          <S.Nmb>4</S.Nmb>
          <S.QuestionIcon />
          <S.Nmb>4</S.Nmb>
        </S.NumberContainer>
        <Txt.H size="1em">
          Maybe this page moved? Got deleted? Is hiding out in quarantine? Never
          existed in the first place?
          <Txt.P size="1em" margin="20px 0">
            Let's go{" "}
            <Txt.CustomLink
              to="/"
              color="white"
              hoverColor="rgb(150,150,150)"
              size="1em"
            >
              home
            </Txt.CustomLink>{" "}
            and try from there.
          </Txt.P>
        </Txt.H>
      </S.Content>
    </S.Container>
  );
}
