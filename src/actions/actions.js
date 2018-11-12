import { ADD_DROPLET, SAVE } from "../constants/actionTypes";

export const addDroplet = droplet => ({
  type: ADD_DROPLET,
  payload: droplet
});

export const save = working => ({
  type: SAVE,
  payload: working
});

function getData() {
  return fetch("http://localhost:3001/droplets")
    .then(response => response.json());
}

export function fetchData() {
  return dispatch => {
    return getData().then(json => {
      dispatch(save(json));
      return json;
    });
  };
}
