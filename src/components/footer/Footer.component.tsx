import React, { FC } from 'react';
import { Layout } from 'antd';
import styled from 'styled-components';

const Wrapper = styled(Layout.Footer)`
  text-align: center;
`;

const Footer: FC = () => (
  <Wrapper>Ben Jedi ©2019 Created by Guilherme Araujo</Wrapper>
);

export default Footer;
