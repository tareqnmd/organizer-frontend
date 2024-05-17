import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { useGetOptionsQuery } from '@/store/features/common/select-api';
import { useEffect, useState } from 'react';

const FormSelect = ({ input, field }: any) => {
	const [options, setOptions] = useState([]);
	const { placeholder, staticOption = [], optionUrl } = input;
	const { data: dynamicOption } = useGetOptionsQuery(optionUrl, {
		skip: staticOption?.length > 0,
	});

	useEffect(() => {
		setOptions(staticOption?.length > 0 ? staticOption : dynamicOption);
	}, [staticOption, dynamicOption]);
	return (
		<Select
			onValueChange={field.onChange}
			defaultValue={field.value}
		>
			<SelectTrigger>
				<SelectValue placeholder={placeholder} />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					{options?.map((item: any, index: number) => (
						<SelectItem
							key={index}
							value={item?.value}
						>
							{item?.label}
						</SelectItem>
					))}
				</SelectGroup>
			</SelectContent>
		</Select>
	);
};

export default FormSelect;
