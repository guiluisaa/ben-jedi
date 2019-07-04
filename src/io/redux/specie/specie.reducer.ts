import { GET_SPECIE, SpecieActionTypes, SpecieState } from './specie.types';

const initialState: SpecieState = {
  species: []
};

const specieReducer = (state = initialState, action: SpecieActionTypes) => {
  switch (action.type) {
    case GET_SPECIE:
      return {
        ...state,
        species: [...state.species, action.payload]
      };
    default:
      return state;
  }
};

export default specieReducer;
