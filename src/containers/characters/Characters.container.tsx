import React, { useEffect, useState } from 'react';
import { parse } from 'query-string';

import CharactersComponent from '@/components/characters/Characters.component';
import useCharacters from '@/io/character/useCharacters';
import { withRouter } from 'react-router';

const Characters = withRouter(({ history, location }) => {
  const { page } = parse(location.search);
  const { characters, meta, isLoading } = useCharacters(
    page && Number(page) ? Number(page) : 1
  );

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
});

export default Characters;
