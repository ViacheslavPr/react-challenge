import axios from "axios";

const baseURL = "https://dog.ceo/api";

export const requestListDog = () => {
  return axios.get(baseURL + "/breeds/list/all");
};

export const requestPageDog = data => {
  return axios.get(baseURL + `/breed/${data}/images/random`);
};
