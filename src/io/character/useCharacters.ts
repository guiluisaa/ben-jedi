import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { message } from 'antd';

import { CharacterState, GET_CHARACTERS } from '@/io/character/character.types';
import { AppState } from '@/io/root.reducer';
import api from '@/io/api';
import { fromUrlToQuery, fromUrlToId } from '@/utils';
import { charactersSerializer } from './character.serializer';

const useCharacters = (page: number) => {
  const [t] = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const { characters, meta } = useSelector<AppState, CharacterState>(
    ({ character }) => character
  );

  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true);
    api
      .get('/people', {
        params: {
          page
        }
      })
      .then(res => res.data)
      .then(data => {
        setIsLoading(false);

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
      .catch(error => {
        setIsLoading(false);
        error && message.error(t('jedi:errors.message'));
      });
  }, []);

  return { isLoading, characters, meta };
};

export default useCharacters;
