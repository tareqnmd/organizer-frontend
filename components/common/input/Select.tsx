import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { useGetOptionsQuery } from '@/store/features/common/options-api';
import { useEffect, useState } from 'react';

const FormSelect = ({ input, field, extraTriggerClassName = '' }: any) => {
	const [options, setOptions] = useState([]);
	const [value, setValue] = useState('');
	const { placeholder, staticOption = [], optionUrl } = input;
	const { data: dynamicOption } = useGetOptionsQuery(optionUrl, {
		skip: staticOption?.length > 0,
		refetchOnMountOrArgChange: true,
	});

	useEffect(() => {
		setOptions(staticOption?.length > 0 ? staticOption : dynamicOption);
	}, [staticOption, dynamicOption]);

	useEffect(() => {
		field?.value && setValue(field?.value);
	}, [field]);

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
