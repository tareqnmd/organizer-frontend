import { Card } from 'antd';
import LargeLogo from '../core/LargeLogo';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<Card className="shadow">
			<div className="flex flex-col items-center gap-3">
				<LargeLogo />
				<div className="grid gap-1 place-items-center">{children}</div>
			</div>
		</Card>
	);
};

export default AuthLayout;
