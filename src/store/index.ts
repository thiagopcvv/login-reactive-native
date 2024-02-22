
import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './reducers/userReducer';
import {globalReducer} from './reducers/globalReducer'

export const store = configureStore({
  reducer: {
    user: userReducer,
    modal: globalReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
