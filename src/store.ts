import { configureStore } from "@reduxjs/toolkit";
import tableReducer from "./slices/tableSlice";
import dataReducer from "./slices/dataSlice";
import toastReducer from "./slices/toastSlice";

export const store = configureStore({
	reducer: {
		tables: tableReducer,
		data: dataReducer,
		toast: toastReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
