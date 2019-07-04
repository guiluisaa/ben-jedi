import React, { FunctionComponent } from 'react';

import { Planet } from '@/io/planet/planet.types';
import { Spin } from 'antd';

type PlanetComponentProps = {
  planet: Planet;
  isLoading: boolean;
};

const PlanetComponent: FunctionComponent<PlanetComponentProps> = ({
  planet,
  isLoading
}) => <>{isLoading ? <Spin /> : planet ? planet.name : ''}</>;

export default PlanetComponent;
