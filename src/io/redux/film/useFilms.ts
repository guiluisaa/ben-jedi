import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { message } from 'antd';

import api from '@/io/api';
import { FilmState, GET_FILMS } from '@/io/redux/film/film.types';
import { AppState } from '@/io/redux/root.reducer';
import { fromUrlToQuery } from '@/utils';
import { filmsSerializer } from './film.serializer';

const useFilms = (page: number) => {
  const [t] = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const { films, meta } = useSelector<AppState, FilmState>(({ film }) => film);

  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true);
    api
      .get('/films', {
        params: {
          page
        }
      })
      .then(res => res.data)
      .then(data => {
        setIsLoading(false);

        const { page: previous } = fromUrlToQuery(
          data.previous ? data.previous : '',
          'films'
        );
        const { page: next } = fromUrlToQuery(
          data.next ? data.next : '',
          'films'
        );

        dispatch({
          type: GET_FILMS,
          payload: {
            films: filmsSerializer(data.results),
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

  return { isLoading, films, meta };
};

export default useFilms;
