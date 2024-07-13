import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { axiosInstance } from '@/lib/helper/axios-api';
import { useEffect, useState } from 'react';

const FormSelect = ({ input, field, extraTriggerClassName = '' }: any) => {
	const [dynamicOptions, setDynamicOptions] = useState([]);
	const [options, setOptions] = useState([]);
	const [value, setValue] = useState('');
	const { placeholder, staticOptions = [], optionUrl } = input;

	useEffect(() => {
		setOptions(staticOptions?.length > 0 ? staticOptions : dynamicOptions);
	}, [staticOptions, dynamicOptions]);

	useEffect(() => {
		if (field?.value) {
			setValue(field?.value);
		}
	}, [field?.value]);

	useEffect(() => {
		const getDynamicData = async (url: string) => {
			const { data = [] } = await axiosInstance(url);
			setDynamicOptions(data);
		};
		optionUrl && getDynamicData(optionUrl);
	}, [optionUrl]);

	return (
		<Select
			onValueChange={field.onChange}
			value={value}
		>
			<SelectTrigger className={extraTriggerClassName}>
				<SelectValue placeholder={placeholder} />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					{options?.length > 0 ? (
						options?.map((item: any, index: number) => (
							<SelectItem
								key={index}
								value={item?.value}
							>
								{item?.label}
							</SelectItem>
						))
					) : (
						<span className="text-center text-sm px-2">No Data Found</span>
					)}
				</SelectGroup>
			</SelectContent>
		</Select>
	);
};

export default FormSelect;
