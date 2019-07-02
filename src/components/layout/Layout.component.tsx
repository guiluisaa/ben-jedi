import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Layout as AntLayout, Breadcrumb } from 'antd';

import Footer from '../footer/Footer.component';
import Header from '../header/Header.component';

const Container = styled(AntLayout.Content)`
  padding: ${({ theme }) =>
    `${theme.layout.padding.y} ${theme.layout.padding.x}`};
`;

const Content = styled.div`
  background-color: #fff;
  padding: 24px;
  min-height: 300px;
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
`;

const Layout: FunctionComponent = ({ children }) => (
  <AntLayout className="layout" style={{ minHeight: '100vh' }}>
    <Header />
    <Container>
      <Content>{children}</Content>
    </Container>
    <Footer />
  </AntLayout>
);

export default Layout;
