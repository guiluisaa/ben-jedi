import React, { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { Menu as AntMenu } from 'antd';
import { useTranslation } from 'react-i18next';

const Container = styled(AntMenu).attrs({
  theme: 'dark',
  mode: 'horizontal'
})`
  line-height: 64px;
  display: inline-block;
`;

const Menu: FC = () => {
  const [t] = useTranslation();
  const { pathname } = useLocation();

  return (
    <Container defaultSelectedKeys={[pathname]}>
      <AntMenu.Item key="/dashboard">
        <Link to="/dashboard">{t('menu:dashboard')}</Link>
      </AntMenu.Item>
      <AntMenu.Item key="/characters">
        <Link to="/characters">{t('menu:characters')}</Link>
      </AntMenu.Item>
    </Container>
  );
};

export default Menu;
