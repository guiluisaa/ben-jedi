import React, { FunctionComponent } from 'react';
import { Spin, Tag } from 'antd';

import { Specie } from '@/io/specie/specie.types';

type SpecieComponentProps = {
  specie: Specie;
  isLoading: boolean;
};

const SpecieComponent: FunctionComponent<SpecieComponentProps> = ({
  specie,
  isLoading
}) => (
  <Tag>{isLoading ? <Spin size="small" /> : specie ? specie.name : ''}</Tag>
);

export default SpecieComponent;
