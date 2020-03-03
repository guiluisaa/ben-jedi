import React, { FC } from 'react';
import { Spin, Tag } from 'antd';

import { Specie } from '@/io/redux/specie/specie.types';

type SpecieComponentProps = {
  specie: Specie;
  isLoading: boolean;
};

const SpecieComponent: FC<SpecieComponentProps> = ({ specie, isLoading }) => (
  <Tag>{isLoading ? <Spin size="small" /> : specie ? specie.name : ''}</Tag>
);

export default SpecieComponent;
