import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Layout } from 'antd';

import Logo from '../logo/Logo.component';
import Menu from '../menu/Menu.component';

const Container = styled(Layout.Header)`
  padding: 0;
`;

const Content = styled.div`
  padding: ${props => `0 ${props.theme.layout.padding.x}`};
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
`;

const Header: FunctionComponent = () => (
  <Container>
    <Content>
      <Logo />
      <Menu />
    </Content>
  </Container>
);

export default Header;
