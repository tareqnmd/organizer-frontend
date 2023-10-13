const Textarea = ({ input, register }: any) => {
	const { name, placeholder } = input;
	return (
		<textarea
			name={name}
			placeholder={placeholder}
			{...register(name)}
		/>
	);
};

export default Textarea;
