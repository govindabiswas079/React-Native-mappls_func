import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import ReducerSlicer from './ReducerSlicer';

export const store = configureStore({
  reducer: {
    ReducerSlicer: ReducerSlicer,
  },
  middleware: [...getDefaultMiddleware()],
});
