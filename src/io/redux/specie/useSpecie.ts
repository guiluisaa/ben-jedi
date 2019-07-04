import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { message } from 'antd';

import api from '@/io/api';
import { AppState } from '@/io/redux/root.reducer';
import { SpecieState, GET_SPECIE } from './specie.types';
import { specieSerializer } from './specie.serializer';

const useSpecie = (specieId: number) => {
  const [t] = useTranslation();
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const { species } = useSelector<AppState, SpecieState>(
    ({ specie }) => specie
  );

  const specie = species.filter(item => item.id === specieId)[0];

  useEffect(() => {
    if (specie) return;

    setIsLoading(true);
    api
      .get(`/species/${specieId}`)
      .then(res => res.data)
      .then(data => {
        setIsLoading(false);
        dispatch({
          type: GET_SPECIE,
          payload: specieSerializer(data)
        });
      })
      .catch(error => {
        setIsLoading(false);
        console.log(error);
        error && message.error(t('jedi:errors.message'));
      });
  }, []);

  return { isLoading, specie };
};

export default useSpecie;
