const Input = ({ input, register }: any) => {
	const { name, type, required, placeholder } = input;
	return (
		<input
			type={type}
			required={required}
			placeholder={placeholder}
			{...register(name)}
		/>
	);
};

export default Input;
