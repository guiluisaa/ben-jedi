import React, { FC, useEffect } from 'react';
import { Spin } from 'antd';

import usePlanet from '@/io/redux/planet/usePlanet';

type PlanetProps = {
  planetId: number;
};

const Planet: FC<PlanetProps> = ({ planetId }) => {
  const { planet, isLoading, getPlanet } = usePlanet(planetId);

  useEffect(() => {
    getPlanet();
  }, []);

  return <>{isLoading ? <Spin size="small" /> : planet ? planet.name : '-'}</>;
};

export default Planet;
