import React, { FunctionComponent } from 'react';
import { Layout } from 'antd';
import styled from 'styled-components';

const Wrapper = styled(Layout.Footer)`
  text-align: center;
`;

const Footer: FunctionComponent = () => (
  <Wrapper>Ben Jedi ©2019 Created by Guilherme Araujo</Wrapper>
);

export default Footer;
