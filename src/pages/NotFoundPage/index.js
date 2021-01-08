import * as S from "./style";
import * as Txt from "../../components/Txt";

export default function index() {
  return (
    <S.Container>
      <S.Content>
        <S.NumberContainer>
          <span>4</span>
          <S.QuestionIcon />
          <span>4</span>
        </S.NumberContainer>
        <Txt.H size="1em" color="white" capital="initial">
          Maybe this page moved? Got deleted? Is hiding out in quarantine? Never
          existed in the first place?
          <br /> <br />
          Let's go{" "}
          <Txt.CustomLink
            to="/"
            color="rgb(20,20,20)"
            hover_color="rgb(25,25,25)"
            size="1em"
          >
            home
          </Txt.CustomLink>{" "}
          and try from there.
        </Txt.H>
      </S.Content>
    </S.Container>
  );
}
