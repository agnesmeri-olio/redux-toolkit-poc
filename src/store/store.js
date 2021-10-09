import { configureStore } from '@reduxjs/toolkit';
import articleReducer from './articleSlice';
import counterReducer from './counterSlice';

export const store = configureStore({  
  reducer: {
    article: articleReducer,
    counter: counterReducer,
  },
})
