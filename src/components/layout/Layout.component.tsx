import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Layout as AntLayout } from 'antd';

import Footer from '../footer/Footer.component';
import Header from '../header/Header.component';

const Container = styled(AntLayout.Content)`
  padding: ${({ theme: { layout } }) =>
    `${layout.padding.y} ${layout.padding.x}`};
`;

const Content = styled.div`
  background-color: #fff;
  border-radius: 2px;
  padding: 24px;
  min-height: 300px;
  max-width: ${({ theme: { layout } }) => layout.maxWidth};
  margin: 0 auto;
`;

const Layout: FunctionComponent = ({ children }) => (
  <AntLayout style={{ minHeight: '100vh' }}>
    <Header />
    <Container>
      <Content>{children}</Content>
    </Container>
    <Footer />
  </AntLayout>
);

export default Layout;
