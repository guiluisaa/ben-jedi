import React, { FC, useEffect } from 'react';
import { Typography, Spin } from 'antd';
import { useTranslation } from 'react-i18next';
import { HorizontalBar } from 'react-chartjs-2';

import useFilms from '@/io/redux/film/useFilms';
import { Film } from '@/io/redux/film/film.types';

const filmsToData = (films: Film[]) => {
  const labels = films.map(film => film.title);
  const data = films.map(film => film.characters.length);

  const datasets = [
    {
      label: '# of characters',
      data,
      backgroundColor: [
        '#ffd052',
        '#27395a',
        '#4f9a8e',
        '#3090ad',
        '#b92750',
        '#f7941d',
        '#7d889c'
      ]
    }
  ];

  return { labels, datasets };
};

const Dashboard: FC = () => {
  const [t] = useTranslation();

  const { getFilms, films, isLoading } = useFilms();
  const filmsData = filmsToData(films);

  useEffect(() => {
    getFilms(1);
  }, []);

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

export default Dashboard;
