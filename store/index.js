import { createStore, applyMiddleware } from "redux";
//import { composeWithDevTools } from "redux-devtools-extension";

import thunkMiddleware from "redux-thunk";

import RootReducer from "../reducers/redux.reducer";

const middleware = applyMiddleware(thunkMiddleware);

const Store = createStore(RootReducer, middleware);

export default Store;