import { ADD_ARTICLE } from '../constants/actionTypes';
import { ADD_DROPLET} from '../constants/actionTypes';

export const addArticle = article => ({ 
    type: ADD_ARTICLE, 
    payload: article 
});

export const addDroplet = droplet => ({
    type: ADD_DROPLET,
    payload: droplet
});