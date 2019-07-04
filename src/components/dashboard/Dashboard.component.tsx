import React, { FunctionComponent } from 'react';
import { Typography, Spin } from 'antd';
import { useTranslation } from 'react-i18next';
import { ChartData, HorizontalBar } from 'react-chartjs-2';

type DashboardComponentProps = {
  filmsData: ChartData<Chart.ChartData>;
  isLoading: boolean;
};

const DashboardComponent: FunctionComponent<DashboardComponentProps> = ({
  filmsData,
  isLoading
}) => {
  const [t] = useTranslation();

  return (
    <>
      <Typography.Title level={2}>
        {t('dashboard:number_of_character_per_film')}
      </Typography.Title>

      <Spin spinning={isLoading} delay={500}>
        <HorizontalBar
          data={filmsData}
          options={{
            scales: {
              yAxes: [{ ticks: { beginAtZero: true } }],
              xAxes: [{ stacked: true }]
            }
          }}
        />
      </Spin>
    </>
  );
};

export default DashboardComponent;
