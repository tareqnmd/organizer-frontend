const Textarea = ({ input, register }: any) => {
	const { name, placeholder, rows } = input;
	return (
		<textarea
			name={name}
			placeholder={placeholder}
			rows={rows ?? 0}
			{...register(name)}
		/>
	);
};

export default Textarea;
