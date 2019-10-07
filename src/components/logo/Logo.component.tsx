import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import logo from './logo.png';

const LogoImage = styled.img.attrs({ src: logo })`
  display: inline-block;
  vertical-align: bottom;
  width: 64px;
  height: 64px;
  padding: 5px;
`;

const Logo: FunctionComponent = () => (
  <Link to="/">
    <LogoImage />
  </Link>
);

export default Logo;
