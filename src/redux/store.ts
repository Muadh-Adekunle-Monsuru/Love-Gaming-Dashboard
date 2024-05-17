import { configureStore } from '@reduxjs/toolkit';
import DataReducer from './DataReducer';
export const store = configureStore({
	reducer: {
		rawdata: DataReducer,
	},
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
