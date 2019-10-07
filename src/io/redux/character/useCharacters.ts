import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { message } from 'antd';

import {
  CharacterState,
  GET_CHARACTERS
} from '@/io/redux/character/character.types';
import { AppState } from '@/io/redux/root.reducer';
import api from '@/io/api';
import { fromUrlToQuery } from '@/utils';
import { charactersSerializer } from './character.serializer';

const useCharacters = () => {
  const [t] = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const { characters, meta } = useSelector<AppState, CharacterState>(
    ({ character }) => character
  );

  const dispatch = useDispatch();

  const getCharacters = (page: number) => {
    setIsLoading(true);

    api
      .get('/people', { params: { page } })
      .then(({ data }) => data)
      .then(data => {
        const { page: previous } = fromUrlToQuery(
          data.previous ? data.previous : '',
          'people'
        );
        const { page: next } = fromUrlToQuery(
          data.next ? data.next : '',
          'people'
        );

        dispatch({
          type: GET_CHARACTERS,
          payload: {
            characters: charactersSerializer(data.results),
            meta: {
              page: page ? page : 1,
              count: data.count,
              previous: Number(previous),
              next: Number(next)
            }
          }
        });
      })
      .catch(error => error && message.error(t('jedi:errors.message')))
      .finally(() => setIsLoading(false));
  };

  return { meta, isLoading, getCharacters, characters };
};

export default useCharacters;
