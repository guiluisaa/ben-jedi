import { GET_PLANET, PlanetActionTypes, PlanetState } from './planet.types';

const initialState: PlanetState = {
  planets: []
};

const planetReducer = (state = initialState, action: PlanetActionTypes) => {
  switch (action.type) {
    case GET_PLANET:
      return {
        ...state,
        planets: [...state.planets, action.payload]
      };
    default:
      return state;
  }
};

export default planetReducer;
