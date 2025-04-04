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
import { useGetOptionsQuery } from '@/store/features/common/options-api';
import { Loader } from 'lucide-react';
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
	const { data: getOptionsData = [], isLoading } = useGetOptionsQuery(
		optionUrl,
		{
			skip: !optionUrl,
		},
	);

	useEffect(() => {
		if (field?.value && options?.length > 0) {
			setValue(field?.value);
		}
	}, [field?.value, options]);

	useEffect(() => {
		if (getOptionsData?.length > 0) {
			setDynamicOptions(getOptionsData);
		}
	}, [getOptionsData]);

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
					{isLoading && (
						<Loader
							size={16}
							className="m-auto my-2 animate-spin"
						/>
					)}
					{!isLoading && options?.length > 0 ? (
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
