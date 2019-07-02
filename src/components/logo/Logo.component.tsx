import styled from 'styled-components';

import logo from './logo.png';

const Logo = styled.img.attrs({ src: logo })`
  display: inline-block;
  vertical-align: bottom;
  width: 64px;
  height: 64px;

  padding: 5px;
`;

export default Logo;
