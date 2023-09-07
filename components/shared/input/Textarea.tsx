const Textarea = ({ input, register }: any) => {
	const { name, required, placeholder } = input;
	return (
		<textarea
			name={name}
			required={required}
			placeholder={placeholder}
			{...register(name)}
		/>
	);
};

export default Textarea;
