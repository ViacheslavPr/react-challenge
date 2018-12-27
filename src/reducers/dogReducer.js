import { GET_SUCCEEDED, GET_FAILED, REQUEST_DOG } from "../actions/types";

export const initialState = {
  names: {},
  loading: false,
  error: false,
  handle: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case REQUEST_DOG:
      return {
        names: {},
        loading: true,
        error: false
      };
    case GET_SUCCEEDED:
      return {
        names: action.user.data.message,
        loading: false,
        error: false
      };
    case GET_FAILED:
      return {
        names: {},
        loading: false,
        error: true
      };
    default:
      return state;
  }
}
