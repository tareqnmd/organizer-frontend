import { getColumnData } from '@/utils/helpers';
import style from './Table.module.scss';

const Table = ({ columns, data, actions, footer }: any) => {
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
				{data?.length > 0 ? (
					data?.map((item: any) => (
						<tr
							className={style[item?.extra_class]}
							key={item?._id}
						>
							{columns?.map((column: any) => (
								<td key={column.dataIndex}>
									{getColumnData(item, column)}
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
					))
				) : (
					<tr>
						<td
							colSpan={100}
							className="!text-center !p-5"
						>
							No Data Found!!
						</td>
					</tr>
				)}
				{footer ?? null}
			</tbody>
		</table>
	);
};

export default Table;
