import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Menu as AntMenu } from 'antd';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Container = styled(AntMenu).attrs({
  theme: 'dark',
  mode: 'horizontal'
})`
  line-height: 64px;
  display: inline-block;
`;

const Menu: FunctionComponent = () => {
  const [t] = useTranslation();

  return (
    <Container defaultSelectedKeys={['dashboard']}>
      <AntMenu.Item key="dashboard">
        <Link to="/dashboard">{t('menu:dashboard')}</Link>
      </AntMenu.Item>
      <AntMenu.Item key="characters">
        <Link to="/characters">{t('menu:characters')}</Link>
      </AntMenu.Item>
    </Container>
  );
};

export default Menu;
