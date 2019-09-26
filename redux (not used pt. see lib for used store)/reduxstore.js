import { createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

import logger from 'redux-logger';

import rootReducer from './root-reducer';

export const initStore = (initialState = rootReducer.state) => {
    return createStore(
      rootReducer,
      initialState,
      composeWithDevTools(applyMiddleware(thunkMiddleware))
    )
  }