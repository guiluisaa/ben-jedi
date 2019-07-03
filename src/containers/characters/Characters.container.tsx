import React, { FunctionComponent } from 'react';

import CharactersComponent from '@/components/characters/Characters.component';
import useCharacters from '@/io/character/useCharacters';

const Characters: FunctionComponent = () => {
  const { characters, isLoading } = useCharacters();

  return <CharactersComponent isLoading={isLoading} characters={characters} />;
};

export default Characters;
