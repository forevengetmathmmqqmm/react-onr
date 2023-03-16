import { configureStore } from '@reduxjs/toolkit';
import indexReducer from '../reducers/index'
const store = configureStore({
  reducer: {
    indexReducer
  }
});
export default store;