const Input = ({ input, register }: any) => {
	const { name, type, placeholder } = input;
	return (
		<input
			type={type}
			placeholder={placeholder}
			{...register(name)}
		/>
	);
};

export default Input;
