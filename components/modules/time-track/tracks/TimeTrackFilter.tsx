import FormDateRange from '@/components/common/input/DateRange';
import FormSelect from '@/components/common/input/Select';
import { FormInputType } from '@/lib/helper/shared/enum';
import { TimeTrackListParams } from '@/lib/helper/time-track/types';
import { ControllerRenderProps } from 'react-hook-form';

const TimeTrackFilter = ({
	filterData,
	onChange,
	onDateRangeUpdate,
}: {
	filterData: TimeTrackListParams;
	onChange: (value: string, name: string) => void;
	onDateRangeUpdate: (value: { from: Date; to: Date }) => void;
}) => {
	return (
		<div className="grid grid-cols-4 gap-2">
			<div className="col-span-2 md:col-span-1">
				<FormSelect
					extraTriggerClassName="h-8"
					input={{
						type: FormInputType.SELECT,
						placeholder: 'Select Project',
						optionUrl: '/time-track/project/select',
						name: 'projectId',
					}}
					field={
						{
							onChange: (value: string) =>
								onChange(value, 'projectId'),
							value: filterData?.projectId,
						} as ControllerRenderProps
					}
				/>
			</div>
			<div className="col-span-2 md:col-span-1">
				<FormSelect
					extraTriggerClassName="h-8"
					input={{
						type: FormInputType.SELECT,
						placeholder: 'Select Track Status',
						name: 'isActive',
						staticOptions: [
							{ label: 'All', value: 'all' },
							{ label: 'Running', value: 'true' },
							{ label: 'Stopped', value: 'false' },
						],
					}}
					field={
						{
							onChange: (value: string) =>
								onChange(value, 'isActive'),
							value: filterData?.isActive,
						} as ControllerRenderProps
					}
				/>
			</div>
			<FormDateRange
				onUpdate={onDateRangeUpdate}
				triggerClassName="h-8"
				className="col-span-full md:col-span-2"
				initialValues={{
					from: filterData?.from,
					to: filterData?.to,
				}}
			/>
		</div>
	);
};

export default TimeTrackFilter;
