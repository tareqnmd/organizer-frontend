import { BiSolidNotepad } from 'react-icons/bi';
import { BsCalendarDateFill, BsCreditCardFill } from 'react-icons/bs';
import { FaCode, FaDollarSign } from 'react-icons/fa';
import { MdVideoLibrary } from 'react-icons/md';
import ModuleCard from './Module';

const modules = [
	{
		id: 1,
		name: 'Hisab',
		link: '/hisab',
		icon: <FaDollarSign />,
	},
	{
		id: 2,
		name: 'Note',
		link: '/note',
		icon: <BiSolidNotepad />,
	},
	{
		id: 3,
		name: 'Planner',
		link: '/planner',
		icon: <BsCalendarDateFill />,
	},
	{
		id: 4,
		name: 'Video Player',
		link: '/video-player',
		icon: <MdVideoLibrary />,
	},
	{
		id: 5,
		name: 'Payment',
		link: '/payment',
		icon: <BsCreditCardFill />,
	},
	{
		id: 6,
		name: 'Frontend Code',
		link: '/frontend-code',
		icon: <FaCode />,
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
