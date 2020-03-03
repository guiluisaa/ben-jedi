import React, { FC, useEffect } from 'react';

import PlanetComponent from '@/components/planet/Planet.component';
import usePlanet from '@/io/redux/planet/usePlanet';

type PlanetProps = {
  planetId: number;
};

const Planet: FC<PlanetProps> = ({ planetId }) => {
  const { planet, isLoading, getPlanet } = usePlanet(planetId);

  useEffect(() => {
    getPlanet();
  }, []);

  return <PlanetComponent planet={planet} isLoading={isLoading} />;
};

export default Planet;
