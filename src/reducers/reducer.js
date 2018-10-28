import { ADD_ARTICLE } from "../constants/actionTypes";
import { ADD_DROPLET } from "../constants/actionTypes";

const initialState = {
  articles: [],
  droplets: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      return { ...state, articles: [...state.articles, action.payload] };
    case ADD_DROPLET:
      return { ...state, droplets: [...state.droplets, action.payload] };
    default:
      return state;
  }
};

export default rootReducer;