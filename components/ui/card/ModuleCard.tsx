'use client';
import { setModuleLinks } from '@/features/theme/slice';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';

const ModuleCard = ({ module }: any) => {
	const { id, link, module_links, name, extra_class, icon } = module;
	const router = useRouter();
	const dispatch = useDispatch();
	const module_change = (link: string) => {
		router.push(link);
		dispatch(setModuleLinks({ id, name, links: module_links }));
	};
	return (
		<div
			className={`${
				extra_class ?? ''
			} rounded-xl border bg-card text-card-foreground shadow p-4 bg-[#fff] cursor-pointer`}
			onClick={() => module_change(link)}
		>
			<div className="flex items-center justify-between">
				<p className="text-2xl ">{name}</p>
				<span className="text-4xl">{icon}</span>
			</div>
		</div>
	);
};

export default ModuleCard;
