import styled from 'styled-components';
import * as Txt from '../Txt';

export const Container = styled.div`
  padding: 14px 0;
  margin-bottom: 22px;
  & ::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 7px;
  }
  & ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: rgba(0,0,0,.5);
    -webkit-box-shadow: 0 0 1px rgba(255,255,255,.5);
  }
`;

export const Content = styled.section`
  font-size: 13px;
  max-width: ${props => props.maxWidth || '348px'};
  margin: 0 auto;
  padding:${props => props.padding || '0 0 25px'};
`;

const FormContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: ${props => props.padding || '18px 25px'};
  max-width: ${props => props.maxWidth || '348px'};
  margin: 0 auto;
  margin-bottom:${props => props.marginBottom} ;
`;

export const Form = ({ onSubmit, headerTxt, maxWidth, padding, marginBottom, children }) => {
  return (
    <FormContainer maxWidth={maxWidth} padding={padding} marginBottom={marginBottom}>
      <Txt.H fontWeight='400' margin='0 0 14px 0' lineHeight='1.2' size='28px'>{headerTxt}</Txt.H>
      <form onSubmit={onSubmit}>{children}</form>
    </FormContainer>
  );
};

export const ShadowedFooter = styled.footer`
  padding: ${props => props.padding};
  margin: ${props => props.margin};
  background: linear-gradient(to bottom,rgba(0,0,0,.14),rgba(0,0,0,.03) 3px,transparent);
  ::after{
    display:block;
    width: 100%;
    height:44px;
    background: linear-gradient(to right,#fff,rgba(255,255,255,0),#fff);
    z-index: -1;
    position: absolute;
    top: 0;
    content: "";
  }
`;

const FooterContainer = styled(ShadowedFooter)`
  margin: 0 auto;
  padding:${props => props.padding || '24px 0 30px'};
  & a{ margin: 0 13px; }
`;

const FooterLinksContainer = styled.div` text-align: center; `;

export const Footer = ({ padding }) => {
  return (
    <FooterContainer padding={padding}>
      <FooterLinksContainer>
        <Txt.CustomLink display='inline-block' size='11px'  >Conditions of Use
          </Txt.CustomLink>
        <Txt.CustomLink display='inline-block' size='11px' >Privacy Notice
          </Txt.CustomLink>
        <Txt.CustomLink display='inline-block' size='11px'  >Help
          </Txt.CustomLink>
      </FooterLinksContainer>
      <Txt.P size='11px' color='#555' align='center' margin='8px 0 0 0' lettersSpace='10%'>© 1996-2020, Amazon.com, Inc. or its affiliates</Txt.P>
    </FooterContainer>
  );
}