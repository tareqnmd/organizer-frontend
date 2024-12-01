'use client';
import { Button } from '@/components/ui/button';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { PrayerTimeSearchOptions } from '@/lib/helper/prayer-time';
import { getMonths, getYears, toQueryString } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const PrayerTimeMonthYearSelector = ({
	searchOptions,
}: {
	searchOptions: PrayerTimeSearchOptions;
}) => {
	const router = useRouter();
	const [month, setMonth] = useState(searchOptions.month);
	const [year, setYear] = useState(searchOptions.year);

	const onSearch = () => {
		router.push(
			`/prayer-times${toQueryString({
				city: searchOptions.city,
				country: searchOptions.country,
				month: month,
				year: year,
			})}`,
		);
	};

	return (
		<div className="flex items-center justify-end gap-1">
			<Select
				defaultValue={searchOptions.month.toString()}
				onValueChange={(value) => setMonth(value)}
			>
				<SelectTrigger className="w-[160px]">
					<SelectValue placeholder="Month" />
				</SelectTrigger>
				<SelectContent>
					{getMonths().map((month, index) => (
						<SelectItem key={index} value={index.toString()}>
							{month}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
			<Select
				defaultValue={searchOptions.year.toString()}
				onValueChange={(value) => setYear(value)}
			>
				<SelectTrigger className="w-[120px]">
					<SelectValue placeholder="Year" />
				</SelectTrigger>
				<SelectContent>
					{getYears().map((year, index) => (
						<SelectItem key={index} value={year.toString()}>
							{year}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
			<Button onClick={onSearch}>Search</Button>
		</div>
	);
};

export default PrayerTimeMonthYearSelector;
