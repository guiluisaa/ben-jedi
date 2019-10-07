import React, { FunctionComponent, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { parse } from 'query-string';

import CharactersComponent from '@/components/characters/Characters.component';
import useCharacters from '@/io/redux/character/useCharacters';

const Characters: FunctionComponent = () => {
  const history = useHistory();
  const { search } = useLocation();

  const { page } = parse(search);
  const { getCharacters, characters, meta, isLoading } = useCharacters();

  useEffect(() => {
    getCharacters(page && Number(page) ? Number(page) : 1);
  }, []);

  const changePage = (page: number) =>
    history.push({
      pathname: '/characters',
      search: `?page=${page}`
    });

  return (
    <CharactersComponent
      isLoading={isLoading}
      characters={characters}
      changePage={changePage}
      meta={meta}
    />
  );
};

export default Characters;
