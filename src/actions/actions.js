import { ADD_DROPLET, SAVE} from "../constants/actionTypes";
import {droplets1, droplets2, droplets3, droplets4} from "../api/droplets.js";
export const addDroplet = droplet => ({
  type: ADD_DROPLET,
  payload: droplet
});

export const save = working => ({
  type: SAVE,
  payload: working
});
function getData() {
  return fetch("http://localhost:3000/droplets")
    .then(response => response.json());
}

// export function transition(prevLocation, newLocation) {

// }

export function fetchData() {
  return dispatch => {
    return getData().then(json => {
      dispatch(save(json));
      return json;
    });
  };
}

//THis selects one of the droplet arrays from the droplets.js
//file in the api folder based on the number passed down to it
//we can call for the change in the droplet state numerically
//in order to show a transition between original state to the
//new.
export function fakefetchData(num) {
  switch(num) {
  case 1:
  return dispatch => {
    dispatch(save(droplets1));
  }
  case 2:
  return dispatch => {
    dispatch(save(droplets2));
  }
  case 3:
  return dispatch => {
    dispatch(save(droplets3));
  }
  case 4:
  return dispatch => {
    dispatch(save(droplets4));
  }
  default:
  return console.log("the fakefetchData() not working");
}
}



