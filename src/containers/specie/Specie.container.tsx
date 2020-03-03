import React, { FC } from 'react';

import SpecieComponent from '@/components/specie/Specie.component';
import useSpecie from '@/io/redux/specie/useSpecie';

type SpecieProps = {
  specieId: number;
};

const Specie: FC<SpecieProps> = ({ specieId }) => {
  const { specie, isLoading } = useSpecie(specieId);

  return <SpecieComponent specie={specie} isLoading={isLoading} />;
};

export default Specie;
