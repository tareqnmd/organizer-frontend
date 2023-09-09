import { AiOutlineLoading } from 'react-icons/ai';
import style from './Loading.module.scss';
const Loading = ({
	children,
	loading,
}: {
	children: React.ReactNode;
	loading: boolean;
}) => {
	return (
		<div className={loading ? style['loading-area'] : ''}>
			<div className={loading ? style['loading-backdrop'] : 'hidden'}>
				<div>
					Loading...
					<AiOutlineLoading className="animate-spin" />
				</div>
			</div>
			{children}
		</div>
	);
};

export default Loading;
