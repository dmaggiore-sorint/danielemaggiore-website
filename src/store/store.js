import { configureStore } from "@reduxjs/toolkit";
import langReducer from './langSlice';
import sectionReducer from './sectionSlice';

export const store = configureStore({
  reducer: {
    lang: langReducer,
    section: sectionReducer,
  },
})