import { useAppDispatch } from "../hooks"
import { fetchData } from "../slices/dataSlice";
import { setCurrentTable } from "../slices/tableSlice";

type TableItemType = {
	item: string,
}

const TableItem = ({item}: TableItemType) => {
	const dispatch = useAppDispatch();

	const handler = (item: string) => {
		dispatch(fetchData(item));
		dispatch(setCurrentTable(item));
	}

	return (
		<button className="tableItem" onClick={() => handler(item)}>
			{item}
		</button>
	)
}

export { TableItem }