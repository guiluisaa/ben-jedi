import React, { FunctionComponent } from 'react';
import { Typography } from 'antd';
import { useTranslation } from 'react-i18next';

const DashboardComponent: FunctionComponent = () => {
  const [t] = useTranslation();

  return (
    <>
      <Typography.Title level={2}>{t('dashboard:dashboard')}</Typography.Title>
    </>
  );
};

export default DashboardComponent;
