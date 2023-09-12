import style from './Table.module.scss';
const Table = ({ columns, data, actions }: any) => {
	return (
		<table className={style.table}>
			<thead>
				<tr>
					{columns?.map((column: any) => (
						<th key={column.dataIndex}>{column?.title}</th>
					))}
					{actions?.length > 0 && <th>Action</th>}
				</tr>
			</thead>
			<tbody>
				{data?.map((item: any) => (
					<tr
						className={style[item.extra_class]}
						key={item?._id}
					>
						{columns?.map((column: any) => (
							<td key={column.dataIndex}>
								{item[column.dataIndex]}
							</td>
						))}
						{actions?.length > 0 && (
							<td className={style['action-btns']}>
								{actions?.map((action: any) => (
									<button
										key={action.type}
										onClick={() =>
											action.clickHandler(
												action.type,
												item
											)
										}
									>
										{action.icon}
									</button>
								))}
							</td>
						)}
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default Table;
