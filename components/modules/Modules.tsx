// import { BsCreditCardFill } from 'react-icons/bs';
// import { FcPlanner } from 'react-icons/fc';
// import { GrMoney, GrNotes } from 'react-icons/gr';
// import { MdOutlineVideoLibrary } from 'react-icons/md';
import ModuleCard from '../ui/card/ModuleCard';

const modules = [
	{
		id: 1,
		name: 'Hisab',
		link: '/hisab',
		module_links: [
			{ path: '/hisab', name: 'Hisab', exact: true },
			{ path: '/hisab/transactions', name: 'Transactions' },
			{ path: '/hisab/types', name: 'Types' },
		],
	},
	{
		id: 2,
		name: 'Note',
		link: '/note',
		module_links: [
			{ path: '/note', name: 'Notes', exact: true },
			{ path: '/note/create', name: 'Create' },
		],
	},
	{
		id: 3,
		name: 'Planner',
		link: '/planner',
	},
	{
		id: 4,
		name: 'Video Player',
		link: '/video-player',
	},
	{
		id: 5,
		name: 'Payment',
		link: '/payment',
	},
];

const Modules = () => {
	return (
		<div className="grid place-items-center w-full h-full">
			<div className="grid grid-cols-2 md:grid-cols-3 gap-3 w-full m-auto md:max-w-[75%] xl:max-w-[50%]">
				{modules?.map((module: any) => (
					<ModuleCard
						key={module?.link}
						module={module}
					/>
				))}
			</div>
		</div>
	);
};

export default Modules;
