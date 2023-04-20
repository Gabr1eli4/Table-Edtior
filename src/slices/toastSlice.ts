import { createSlice } from "@reduxjs/toolkit";

interface ToastState {
	show: boolean;
}

const initialState: ToastState = {
	show: false,
};

const toastSlice = createSlice({
	name: "toast",
	initialState,
	reducers: {
		showToast(state) {
			state.show = true;
		},
		hideToast(state) {
			state.show = false;
		},
	},
});

export const { showToast, hideToast } = toastSlice.actions;
export default toastSlice.reducer;
