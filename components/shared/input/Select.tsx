'use client';
import { useGetOptionsQuery } from '@/features/common/select-api';
import { useEffect, useState } from 'react';

const Select = ({ input, register }: any) => {
	const { name, required, url } = input;
	const [options, setOptions] = useState([]);
	const { data } = useGetOptionsQuery(url);

	useEffect(() => {
		setOptions(data ?? []);
	}, [data]);

	return (
		<select
			required={required}
			{...register(name)}
		>
			<option
				disabled
				selected
				value=""
			>
				Select Type
			</option>
			{options?.map((option: any) => (
				<option
					key={option._id}
					value={option._id}
				>
					{option.name}
				</option>
			))}
		</select>
	);
};

export default Select;
