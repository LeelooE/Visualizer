import {
  ADD_DROPLET,
  SAVE
} from "../constants/actionTypes";

const initialState = {
  droplets: [],
  working: undefined
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE:
    return {...state, working: action.payload, droplets: action.payload}
    case ADD_DROPLET:
      return { ...state, droplets: [...state.droplets, action.payload] };
    default:
      return state;
  }
};

export default reducer;
