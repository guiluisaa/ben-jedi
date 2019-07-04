import { combineReducers } from 'redux';

import characterReducer from './character/character.reducer';
import planetReducer from './planet/planet.reducer';
import specieReducer from './specie/specie.reducer';

const rootReducer = combineReducers({
  character: characterReducer,
  planet: planetReducer,
  specie: specieReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
