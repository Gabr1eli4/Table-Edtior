import { TableCell } from "./TableCell"
import { MinTableItem } from "../types/collections"

type TableRowType<T extends MinTableItem> = {
	item: T,
}

function objectKeys<T extends {}>(obj: T) {
  return Object.keys(obj).map((objKey) => objKey as keyof T);
}

const TableRow = <T extends MinTableItem>({item}: TableRowType<T>) => {

	return (
		<div className="tableRow">
			{objectKeys(item).map((itemProperty, index) => (
				<TableCell key={index} id={item.id} column={itemProperty} value={item[itemProperty]}/>
			))}
		</div>
	)
}

export { TableRow }