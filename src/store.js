import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./reducers";
import mySaga from "./sagas/sagas";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const initialState = {};

const middleware = [sagaMiddleware];

const store = createStore(
  rootReducer,
  initialState,
  compose(applyMiddleware(...middleware))
);

// then run the saga
sagaMiddleware.run(mySaga);

export default store;
