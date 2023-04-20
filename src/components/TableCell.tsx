import { useState } from "react"
import { PrimitiveType } from "../types/collections";
import { useAppDispatch, useAppSelector } from "../hooks";
import { updateTable } from "../slices/dataSlice";
import { showToast } from "../slices/toastSlice";

type TableCellType <T> = {
	value: T;
	id: PrimitiveType;
	column: string | number | symbol;
}

const TableCell =  <T,>({value, id, column}: TableCellType<T>) => {
	const dispatch = useAppDispatch();
	const [state, setState] = useState<any>(value);
	const currentTable = useAppSelector(state => state.tables.currentTable);

	function inputHandler(event: React.KeyboardEvent<HTMLInputElement>) {
		if (event.code === "Enter" && currentTable) {
			dispatch(updateTable({table_name: currentTable, id: id, data: {[`${column.toString()}`]: event.currentTarget.value}}));
			dispatch(showToast());
		}

	}

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setState(event.target.value);
	}

	return (
		<div className="tableCell">
			<input type="text" value={state} onKeyDown={inputHandler} onChange={handleChange} />
		</div>
	)
}

export { TableCell }