import { configureStore } from '@reduxjs/toolkit';
import studentReducer from './students/studentSlice';
import dialogReducer from './dialogSlice';

export const store = configureStore({

   reducer: {
        students: studentReducer,
        dialog: dialogReducer
   }
});