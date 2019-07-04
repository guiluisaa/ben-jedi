import React, { FunctionComponent } from 'react';

import SpecieComponent from '@/components/specie/Specie.component';
import useSpecie from '@/io/specie/useSpecie';

type SpecieProps = {
  specieId: number;
};

const Specie: FunctionComponent<SpecieProps> = ({ specieId }) => {
  const { specie, isLoading } = useSpecie(specieId);

  return <SpecieComponent specie={specie} isLoading={isLoading} />;
};

export default Specie;
