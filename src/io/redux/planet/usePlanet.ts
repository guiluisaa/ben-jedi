import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { message } from 'antd';

import api from '@/io/api';
import { AppState } from '@/io/redux/root.reducer';
import { PlanetState, GET_PLANET } from './planet.types';
import { planetSerializer } from './planet.serializer';

const usePlanet = (planetId: number) => {
  const [t] = useTranslation();
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const { planets } = useSelector<AppState, PlanetState>(
    ({ planet }) => planet
  );

  const planet = planets.filter(item => item.id === planetId)[0];

  const getPlanet = () => {
    if (planet) return;
    setIsLoading(true);

    api
      .get(`/planets/${planetId}`)
      .then(({ data }) => data)
      .then(data => {
        dispatch({
          type: GET_PLANET,
          payload: planetSerializer(data)
        });
      })
      .catch(error => error && message.error(t('jedi:errors.message')))
      .finally(() => setIsLoading(false));
  };

  return { isLoading, planet, getPlanet };
};

export default usePlanet;
