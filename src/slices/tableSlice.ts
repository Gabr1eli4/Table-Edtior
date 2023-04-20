import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import supabase from "../config/supabaseClient";
import { TableType } from "../types/collections";

export const fetchTables = createAsyncThunk<
	TableType[],
	undefined,
	{ rejectValue: string }
>("table/fetchTables", async function (_, { rejectWithValue }) {
	const { data, error } = await supabase.rpc("get_all_tables");

	if (error) {
		return rejectWithValue(error.message);
	}

	return data;
});

interface TableState {
	tables: TableType[];
	currentTable: string | null;
	status: string | null;
	error: string | undefined;
}

const initialState = {
	tables: [],
	currentTable: null,
	status: null,
	error: "",
} as TableState;

const tableSlice = createSlice({
	name: "table",
	initialState,
	reducers: {
		setCurrentTable(state, action) {
			state.currentTable = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchTables.pending, (state, _) => {
			state.status = "loading";
			state.error = "";
		});
		builder.addCase(fetchTables.fulfilled, (state, action) => {
			state.status = "resolved";
			state.tables = action.payload;
		});
		builder.addCase(fetchTables.rejected, (state, action) => {
			state.status = "rejected";
			state.error = action.payload;
		});
	},
});

export const { setCurrentTable } = tableSlice.actions;

export default tableSlice.reducer;
