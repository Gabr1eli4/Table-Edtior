import { TableItem } from './TableItem';
import { useAppSelector } from '../hooks';

const TableList = () => {
	const tables = useAppSelector(state => state.tables.tables);

	console.log(tables);

	return(
		<div className="tableList">
			{tables.map((headerValue, index) => {
				return (<TableItem key={index} item={headerValue.table_name}/>)
			}
			)}
		</div>
	)
}

export { TableList }