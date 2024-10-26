'use client';
import FormDateRange from '@/components/common/input/DateRange';
import FormSelect from '@/components/common/input/Select';
import { Input } from '@/components/ui/input';
import { BudgetTransactionParamType } from '@/lib/helper/modules/budget';

const BudgetTransactionFilter = ({
	filterData,
	onChange,
	onDateRangeUpdate,
}: {
	filterData: BudgetTransactionParamType;
	onChange: (value: string, name: string) => void;
	onDateRangeUpdate: (value: { from: Date; to: Date }) => void;
}) => {
	return (
		<>
			<div className="col-span-4 flex gap-2">
				<Input
					className="h-8"
					placeholder="Search By Description"
					value={filterData.transaction}
					onChange={(e) => onChange(e.target.value, 'transaction')}
				/>

				<FormSelect
					extraTriggerClassName="h-8"
					input={{
						type: 'select',
						placeholder: 'Select Type',
						optionUrl: '/budget/type-select',
					}}
					field={{
						onChange: (value: string) => onChange(value, 'type'),
						value: filterData.type,
					}}
				/>
				<FormSelect
					extraTriggerClassName="h-8"
					input={{
						type: 'select',
						placeholder: 'Select Category',
						optionUrl: '/budget/type-category-select',
					}}
					field={{
						onChange: (value: string) =>
							onChange(value, 'category'),
						value: filterData.category,
					}}
				/>
			</div>
			<FormDateRange
				onUpdate={onDateRangeUpdate}
				triggerClassName="h-8"
				className="col-span-3 w-full xl:col-span-1 xl:col-start-3"
				initialValues={{
					from: filterData.from,
					to: filterData.to,
				}}
			/>
		</>
	);
};

export default BudgetTransactionFilter;
