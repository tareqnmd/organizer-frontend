const Radio = ({ input, register }: any) => {
	const { name, type, options } = input;
	return (
		<div className="flex gap-6 mt-2">
			{options.map((option: any) => (
				<div
					className="flex gap-2 items-center py-2"
					key={option.name}
				>
					<input
						type={type}
						value={option.value}
						id={option.name}
						{...register(name)}
					/>
					<label htmlFor={option.name}>{option.name}</label>
				</div>
			))}
		</div>
	);
};

export default Radio;
