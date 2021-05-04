import { combineReducers, createStore } from 'redux'
import {
  accomodation,
  paymentTypes,
  roomTypes,
} from './reducers'

const rootReducer = combineReducers({
  accomodation,
  paymentTypes,
  roomTypes,
});

export type AppState = ReturnType<typeof rootReducer>;

export default createStore(rootReducer);
