import React, { FunctionComponent, useEffect } from 'react';

import DashboardComponent from '@/components/dashboard/Dashboard.component';
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

  return {
    labels,
    datasets
  };
};

const Dashboard: FunctionComponent = () => {
  const { getFilms, films, isLoading } = useFilms();
  const filmsData = filmsToData(films);

  useEffect(() => {
    getFilms(1);
  }, []);

  return (
    <DashboardComponent
      filmsData={filmsData}
      isLoading={isLoading && !films.length ? true : false}
    />
  );
};

export default Dashboard;
