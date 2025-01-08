'use client';
import FormDateRange from '@/components/common/input/DateRange';
import FormSelect from '@/components/common/input/Select';
import { Input } from '@/components/ui/input';
import { BudgetTransactionParamType } from '@/lib/helper/budget';
import { FormInputType } from '@/lib/helper/shared/enum';
import { ControllerRenderProps } from 'react-hook-form';
import BudgetTransactionsPdf from './BudgetTransactionsPdf';

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
			<Input
				className="col-span-6 h-8 sm:col-span-3 md:col-span-2"
				placeholder="Search By Description"
				value={filterData.transaction}
				onChange={(e) => onChange(e.target.value, 'transaction')}
			/>
			<FormSelect
				extraTriggerClassName="h-8 col-span-3 md:col-span-2"
				input={{
					type: FormInputType.SELECT,
					placeholder: 'Select Type',
					optionUrl: '/budget/type-select',
					name: 'type',
				}}
				field={
					{
						onChange: (value: string) => onChange(value, 'type'),
						value: filterData.type,
					} as ControllerRenderProps
				}
			/>
			<FormSelect
				extraTriggerClassName="h-8 col-span-3 md:col-span-2"
				input={{
					type: FormInputType.SELECT,
					placeholder: 'Select Category',
					optionUrl: '/budget/type-category-select',
					name: 'category',
				}}
				field={
					{
						onChange: (value: string) =>
							onChange(value, 'category'),
						value: filterData.category,
					} as ControllerRenderProps
				}
			/>
			<FormDateRange
				onUpdate={onDateRangeUpdate}
				triggerClassName="h-8"
				className="col-span-6 w-full sm:col-span-3 md:col-span-2"
				initialValues={{
					from: filterData.from,
					to: filterData.to,
				}}
			/>
			<BudgetTransactionsPdf extraClassName="h-8 col-span-3 md:col-span-2" />
		</>
	);
};

export default BudgetTransactionFilter;
