const TableHeader = ({headers }: {headers: string[]}) => {
	
	return (
		<div className="tableHeader">
			{headers.map((header, index) => (
				<div className="tableCell" key={index}>{header}</div>
			))}
		</div>
	)
}

export { TableHeader }