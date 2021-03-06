import { LinkFooter } from "../style";
import styled from "styled-components";

export const Container = styled.div`
  margin-top: 30px;
  padding: 0 0 7px 0;
  background-color: #232f3e;
  position: relative;
`;

export const FooterBtn = styled.a`
  width: 100%;
`;

export const FooterBtnContent = styled.div`
  background-color: #37475a;
  color: white;
  text-align: center;
  padding: 15px 0;
  font-size: 13px;
`;

export const Table = styled.div`
  display: table;
  margin: 40px auto 0;
  width: 100%;
  max-width: 1100px;
`;

export const Row = styled.div`
  display: table-row;
`;

export const Cell = styled.div`
  display: table-cell;
  padding: 0 10px;
  ${(props) => (props.divider ? "width:9.9%" : "width: min-content")};
  & * {
    margin-bottom: 6px;
  }
`;

export const CellHead = styled.div`
  letter-spacing: 0.6px;
  white-space: nowrap;
  margin-bottom: 10px;
  font-weight: 700;
  color: white;
  font-size: 1rem;
`;

export const CellList = styled.ul``;
//
export const ListItem = styled.li`
  font-size: 14px;
  color: #ddd;
  line-height: 1.2;
  margin-bottom: 12px;
`;
export const Item = ({ children }) => {
  return (
    <LinkFooter underline_color="white">
      <ListItem>{children}</ListItem>
    </LinkFooter>
  );
};

export const Divider = styled.hr`
  border-top: 1px solid #3a4553;
  margin: 40px 0 28px;
`;

export const SecondSection = styled.div`
  margin: 0px auto 40px;
  max-width: 590px;
  line-height: 18px;
  white-space: nowrap;
  & span {
    padding: 0 0.6em;
    display: inline-block;
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    & a {
      margin-top: 12px;
    }
  }
`;

export const Logo = styled.div`
  background-position: -10px -90px;
  width: 76px;
  height: 23px;
  background-image: url("https://images-na.ssl-images-amazon.com/images/G/01/gno/sprites/nav-sprite-global-1x-hm-dsk-reorg._CB405937547_.png");
  margin: 10px auto 0;
`;

export const BtnsContent = styled.div`
  display: inline-block;
  text-decoration: none;
  border: 1px solid #848688;
  border-radius: 3px;
  padding: 6px 18px 6px 8px;
  font-size: 13px;
  margin-right: 4px;
`;

export const Icon = styled.div`
  display: inline-block;
  background-image: ${(props) => `url(${props.url})`};
  background-position: ${(props) => props.position};
  color: white;
`;

export const EarthIcon = styled(Icon)`
  width: 15px;
  height: 15px;
  margin: 3px 0 -3px;
`;

export const BtnTxt = styled.span`
  color: #ccc;
`;

export const LanguageArrow = styled(Icon)`
  position: relative;
  top: 2px;
  left: 9px;
  width: 12px;
  height: 12px;
`;

export const Flag = styled(Icon)`
  width: 18px;
  height: 12px;
  margin-bottom: -1px;
`;
