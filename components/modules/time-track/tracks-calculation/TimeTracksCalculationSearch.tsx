'use client';
import FormDateRange from '@/components/common/input/DateRange';
import FormSelect from '@/components/common/input/Select';
import { Button } from '@/components/ui/button';
import { FormInputType } from '@/lib/helper/shared/enum';
import { TimeTrackCalculationParams } from '@/lib/helper/time-track/types';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { ControllerRenderProps } from 'react-hook-form';

const TimeTracksCalculationSearch = ({
	searchParams,
}: {
	searchParams: TimeTrackCalculationParams;
}) => {
	const router = useRouter();
	const [searchData, setSearchData] =
		useState<TimeTrackCalculationParams>(searchParams);

	const handleSearch = () => {
		if (searchData.projectId && searchData.from && searchData.to) {
			router.push(
				`/time-track/tracks-calculation?projectId=${searchData.projectId}&from=${searchData.from}&to=${searchData.to}`,
			);
		}
	};

	return (
		<div className="flex flex-col gap-2 overflow-hidden">
			<div className="grid grid-cols-2 gap-2">
				<FormSelect
					extraTriggerClassName="h-8 focus:outline-none focus:ring-0 focus-visible:ring-0"
					input={{
						type: FormInputType.SELECT,
						placeholder: 'Select Project',
						optionUrl: '/time-track/project/select',
						name: 'projectId',
					}}
					field={
						{
							onChange: (value: string) =>
								setSearchData({
									...searchData,
									projectId: value,
								}),
							value: searchData?.projectId,
						} as ControllerRenderProps
					}
				/>
				<FormDateRange
					onUpdate={(value) =>
						setSearchData((prev: TimeTrackCalculationParams) => ({
							...prev,
							from: value.from.toDateString(),
							to: value.to.toDateString(),
						}))
					}
					triggerClassName="h-8"
					initialValues={{
						from: searchParams?.from,
						to: searchParams?.to,
					}}
				/>
			</div>
			<Button
				disabled={
					!(searchData.projectId && searchData.from && searchData.to)
				}
				onClick={handleSearch}
			>
				Search
			</Button>
		</div>
	);
};

export default TimeTracksCalculationSearch;
