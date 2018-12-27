import { GET_DOG, REQUEST_DOG, GET_HANDLE, REQUEST_PAGE } from "./types";

export const requestDog = () => {
  return {
    type: REQUEST_DOG
  };
};
//Get Dog
export const getDog = () => {
  return {
    type: GET_DOG
  };
};

export const requestPage = () => {
  return {
    type: REQUEST_PAGE
  };
};

// Get profile by handle
export const getPageByHandle = handle => {
  console.log(handle);
  return {
    type: GET_HANDLE,
    handle: handle
  };
};
