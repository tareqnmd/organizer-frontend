const Date = ({ input, register }: any) => {
	const { name, type } = input;
	return (
		<input
			type={type}
			{...register(name)}
		/>
	);
};

export default Date;
