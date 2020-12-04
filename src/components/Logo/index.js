// you should deal with <i> as an text (to center it use text-align).
// (to center <a> use text-align).
// to align i in a, make i inline-block and in a text-align center.
// Q/ align center for all things? how?

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LogoLink = styled(Link)`
  display: block;
  margin: 0 auto;
  text-align: center;
`;
export const LogoBc = styled.i`
    background-position: -5px -130px;
    height: 31px;
    width: 103px; 
    background-image: url('https://m.media-amazon.com/images/G/01/AUIClients/AmazonUIBaseCSS-sprite_1x-c4a765aedd886dc04d89e7e93b6a02c59ecb7013._V2_.png');
    display: inline-block;
    vertical-align: top;
    margin-bottom:${props => props.marginBottom || '20px'};
`;
export default function Logo({ marginBottom }) {
  return (
    <LogoLink to='/'>
      <LogoBc marginBottom={marginBottom} />
    </LogoLink>
  )
}
