import React, { FunctionComponent } from 'react';
import { Spin } from 'antd';

import { Planet } from '@/io/redux/planet/planet.types';

type PlanetComponentProps = {
  planet: Planet;
  isLoading: boolean;
};

const PlanetComponent: FunctionComponent<PlanetComponentProps> = ({
  planet,
  isLoading
}) => <>{isLoading ? <Spin size="small" /> : planet ? planet.name : ''}</>;

export default PlanetComponent;
