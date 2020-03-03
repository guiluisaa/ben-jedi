import React, { FC } from 'react';
import { Spin, Tag } from 'antd';

import SpecieComponent from '@/components/specie/Specie.component';
import useSpecie from '@/io/redux/specie/useSpecie';

type SpecieProps = {
  specieId: number;
};

const Specie: FC<SpecieProps> = ({ specieId }) => {
  const { specie, isLoading } = useSpecie(specieId);

  return (
    <Tag>{isLoading ? <Spin size="small" /> : specie ? specie.name : ''}</Tag>
  );
};

export default Specie;
