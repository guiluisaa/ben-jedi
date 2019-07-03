import React, { FunctionComponent } from 'react';

import { Character } from '@/io/character/character.types';

type CharactersComponentProps = {
  isLoading: boolean;
  characters: Character[];
};

const CharactersComponent: FunctionComponent<CharactersComponentProps> = ({
  isLoading,
  characters
}) => (
  <>
    {`Is Loading: ${isLoading}`} <br /> {characters.length}
  </>
);

export default CharactersComponent;
