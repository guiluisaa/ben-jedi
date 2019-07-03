import {
  GET_CHARACTERS,
  SET_LOADING_CHARACTERS,
  CharacterActionTypes,
  CharacterState
} from './character.types';

const initialState: CharacterState = {
  characters: []
};

const characterReducer = (
  state = initialState,
  action: CharacterActionTypes
) => {
  switch (action.type) {
    case SET_LOADING_CHARACTERS:
      return {
        ...state,
        isLoading: action.payload
      };
    case GET_CHARACTERS:
      return {
        ...state,
        characters: action.payload
      };
    default:
      return state;
  }
};

export default characterReducer;
