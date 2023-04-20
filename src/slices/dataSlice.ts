import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import supabase from "../config/supabaseClient";
import { PrimitiveType } from "../types/collections";

export interface UpdateTableType {
	table_name: string;
	id: PrimitiveType;
	data: {};
}

export const updateTable = createAsyncThunk<
	undefined,
	UpdateTableType,
	{ rejectValue: string }
>(
	"table/updateTable",
	async function ({ table_name, id, data }, { rejectWithValue }) {
		const { error } = await supabase
			.from(table_name)
			.update(data)
			.eq("id", id);

		if (error) {
			return rejectWithValue(error.message);
		}
	}
);

export const fetchData = createAsyncThunk<any, string, { rejectValue: string }>(
	"data/fetchData",
	async (table_name: string, { rejectWithValue }) => {
		const { data, error } = await supabase.from(table_name).select("*");

		if (error) {
			return rejectWithValue(error.message);
		} else {
			return data;
		}
	}
);

type DataType = {
	data: any[];
	fetchStatus: string | null;
	fetchError: string | null;
	updateStatus: string | null;
	updateError: string | null;
};

const initialState = {
	data: [],
	fetchStatus: null,
	fetchError: "",
	updateStatus: "",
	updateError: "",
} as DataType;

const dataSlice = createSlice({
	name: "data",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchData.pending, (state, _) => {
			state.fetchStatus = "loading";
			state.fetchError = "";
			state.data = [];
		});
		builder.addCase(fetchData.fulfilled, (state, action) => {
			state.fetchStatus = "resolved";
			state.data = action.payload;
		});
		builder.addCase(fetchData.rejected, (state, action) => {
			state.fetchStatus = "rejected";
			if (action.payload) {
				state.fetchError = action.payload;
			}
		});
		builder.addCase(updateTable.pending, (state, action) => {
			state.updateStatus = "loading";
			state.updateError = null;
		});
		builder.addCase(updateTable.fulfilled, (state, action) => {
			state.updateStatus = "resolved";
			state.updateError = null;
		});
		builder.addCase(updateTable.rejected, (state, action) => {
			state.updateStatus = "rejected";
			if (action.payload) {
				state.updateError = action.payload;
			}
		});
	},
});

export default dataSlice.reducer;
