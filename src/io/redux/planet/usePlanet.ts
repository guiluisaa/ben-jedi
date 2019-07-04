import { useState, useEffect } from 'react';
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

  useEffect(() => {
    if (planet) return;

    setIsLoading(true);
    api
      .get(`/planets/${planetId}`)
      .then(res => res.data)
      .then(data => {
        setIsLoading(false);
        dispatch({
          type: GET_PLANET,
          payload: planetSerializer(data)
        });
      })
      .catch(error => {
        setIsLoading(false);
        console.log(error);
        error && message.error(t('jedi:errors.message'));
      });
  }, []);

  return { isLoading, planet };
};

export default usePlanet;
