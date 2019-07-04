import { combineReducers } from 'redux';

import characterReducer from './character/character.reducer';
import planetReducer from './planet/planet.reducer';

const rootReducer = combineReducers({
  character: characterReducer,
  planet: planetReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
