import { configureStore } from '@reduxjs/toolkit';
import foodReducer from './foodSlice';

const store = configureStore({
  reducer: {
		foods: foodReducer
	},
});

export default store;