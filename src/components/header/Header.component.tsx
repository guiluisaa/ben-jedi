import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Layout } from 'antd';

import Logo from '../logo/Logo.component';
import Menu from '../menu/Menu.component';

const Container = styled(Layout.Header)`
  padding: 0;
`;

const Content = styled.div`
  padding: ${({ theme: { layout } }) => `0 ${layout.padding.x}`};
  max-width: ${({ theme: { layout } }) => layout.maxWidth};
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
