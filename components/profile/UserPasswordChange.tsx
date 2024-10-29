import { Checkbox } from '../ui/checkbox';

const UserPasswordChange = ({
	setPasswordChange,
	passwordChange,
}: {
	setPasswordChange: (e: boolean) => void;
	passwordChange: boolean;
}) => {
	return (
		<div className="flex items-center justify-end gap-1">
			<Checkbox
				id="changePassword"
				checked={passwordChange}
				className="h-4 w-4 cursor-pointer rounded"
				onCheckedChange={(e) => setPasswordChange(e as boolean)}
			/>
			<label
				htmlFor="changePassword"
				className="cursor-pointer select-none text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
			>
				Change Password?
			</label>
		</div>
	);
};

export default UserPasswordChange;
