import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import {
	CustomFormInputType,
	InputOptionType,
} from '@/lib/helper/shared/types';
import { axiosInstance } from '@/lib/utils';
import { useEffect, useState } from 'react';
import { ControllerRenderProps } from 'react-hook-form';

const FormSelect = ({
	input,
	field,
	extraTriggerClassName = '',
}: {
	input: CustomFormInputType;
	field: ControllerRenderProps;
	extraTriggerClassName?: string;
}) => {
	const [dynamicOptions, setDynamicOptions] = useState([]);
	const [options, setOptions] = useState<InputOptionType[]>([]);
	const [value, setValue] = useState('');
	const { placeholder, staticOptions = [], optionUrl, disabled } = input;

	useEffect(() => {
		if (field?.value && options?.length > 0) {
			setValue(field?.value);
		}
	}, [field?.value, options]);

	useEffect(() => {
		const getDynamicData = async (url: string) => {
			const { data = [] } = await axiosInstance(url);
			setDynamicOptions(data);
		};
		optionUrl && getDynamicData(optionUrl);
	}, [optionUrl]);

	useEffect(() => {
		const updatedOptions =
			staticOptions?.length > 0 ? staticOptions : dynamicOptions;
		if (updatedOptions?.length > 0) {
			setOptions(updatedOptions);
		}
	}, [staticOptions, dynamicOptions]);

	return (
		<Select
			disabled={disabled}
			onValueChange={field.onChange}
			value={value}
		>
			<SelectTrigger className={extraTriggerClassName}>
				<SelectValue placeholder={placeholder} />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					{options?.length > 0 ? (
						options?.map((item: InputOptionType, index: number) => (
							<SelectItem
								key={index}
								value={item?.value.toString()}
							>
								{item?.label}
							</SelectItem>
						))
					) : (
						<span className="px-2 text-center text-sm">
							No Data Found
						</span>
					)}
				</SelectGroup>
			</SelectContent>
		</Select>
	);
};

export default FormSelect;
