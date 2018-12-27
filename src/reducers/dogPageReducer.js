import {
  GET_PAGE_SUCCEEDED,
  GET_PAGE_FAILED,
  REQUEST_PAGE
} from "../actions/types";

export const initialState = {
  page: "",
  loading: false,
  error: false,
  handle: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case REQUEST_PAGE:
      return {
        page: "",
        loading: true,
        error: false
      };
    case GET_PAGE_SUCCEEDED:
      return {
        page: action.user.data.message,
        loading: false,
        error: false
      };
    case GET_PAGE_FAILED:
      return {
        page: "",
        loading: false,
        error: true
      };
    default:
      return state;
  }
}
