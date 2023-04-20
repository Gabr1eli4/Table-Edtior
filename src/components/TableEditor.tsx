import { TableRow } from "./TableRow"
import { TableHeader } from "./TableHeader"
import { useAppSelector } from "../hooks"

const TableEditor = () => {
	const data = useAppSelector(state => state.data.data);
	const headers = data.length ? Object.entries(data[0]).map(([key]) => key) : [];

	return (
		<div className="tableEditor">
				<h1>Table Editor</h1>
				<TableHeader headers={headers}/>
				{data.map((prop, index) => <TableRow key={index} item={prop}/>)}
		</div>
	)
}

export { TableEditor }