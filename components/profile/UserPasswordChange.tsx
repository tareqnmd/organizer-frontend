const UserPasswordChange = ({
	setPasswordChange,
	passwordChange,
}: {
	setPasswordChange: any;
	passwordChange: any;
}) => {
	return (
		<div className="flex justify-end items-center gap-1 ">
			<input
				id="passwordChange"
				type="checkbox"
				checked={passwordChange}
				onChange={(e) => setPasswordChange(e.target.checked)}
				className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded cursor-pointer"
			/>
			<label
				htmlFor="passwordChange"
				className="text-sm font-medium select-none cursor-pointer"
			>
				Change Password?
			</label>
		</div>
	);
};

export default UserPasswordChange;
