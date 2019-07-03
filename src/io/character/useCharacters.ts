import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { message } from 'antd';

import { CharacterState, GET_CHARACTERS } from '@/io/character/character.types';
import { AppState } from '@/io/root.reducer';
import api from '@/io/api';

const useCharacters = () => {
  const [t] = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const { characters } = useSelector<AppState, CharacterState>(
    ({ character }) => character
  );

  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true);
    api
      .get('/people')
      .then(res => res.data)
      .then(data => {
        setIsLoading(false);
        dispatch({ type: GET_CHARACTERS, payload: data.results });
      })
      .catch(error => {
        setIsLoading(false);
        error && message.error(t('jedi:errors.message'));
      });
  }, []);

  return { isLoading, characters };
};

export default useCharacters;
