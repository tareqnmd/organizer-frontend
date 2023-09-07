const Date = ({ input, register }: any) => {
	const { name, type, required, value } = input;
	return (
		<input
			type={type}
			required={required}
			{...register(name)}
		/>
	);
};

export default Date;
