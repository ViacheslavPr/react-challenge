import { createSelector } from "reselect";

import { initialState as infoInitialState } from "../reducers/dogReducer";
import { initialState as pageInitialState } from "../reducers/dogReducer";

export const getInfo = state => state.info || infoInitialState;
export const getPage = state => state.page || pageInitialState;

export const getInfoLoadingSelector = createSelector(
  getInfo,
  state => state.loading
);

export const getInfoErrorSelector = createSelector(
  getInfo,
  state => state.error
);

export const getInfoNamesSelector = createSelector(
  getInfo,
  state => state.names
);

export const getPageSelector = createSelector(
  getPage,
  state => state.page
);
