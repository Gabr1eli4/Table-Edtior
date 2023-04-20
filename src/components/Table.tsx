import { TableSelection } from "./TableSelection"
import { TableEditor } from "./TableEditor"

function Table() {	

	return (
		<div className="table">
			<TableSelection />
			<TableEditor />
		</div>
	)
}

export { Table }