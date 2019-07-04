import React, { FunctionComponent } from 'react';
import PlanetComponent from '@/components/planet/Planet.component';
import usePlanet from '@/io/planet/usePlanet';

type PlanetProps = {
  planetId: number;
};

const Planet: FunctionComponent<PlanetProps> = ({ planetId }) => {
  const { planet, isLoading } = usePlanet(planetId);

  return <PlanetComponent planet={planet} isLoading={isLoading} />;
};

export default Planet;
