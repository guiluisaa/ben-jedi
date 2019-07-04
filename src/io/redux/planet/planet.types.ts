export type Planet = {
  id: number;
  name: string;
};

export type PlanetState = {
  planets: Planet[];
};

export const GET_PLANET = 'GET_PLANET';

type getPlanet = {
  type: typeof GET_PLANET;
  payload: Planet;
};

export type PlanetActionTypes = getPlanet;
