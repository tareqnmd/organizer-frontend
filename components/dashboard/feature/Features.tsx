import { Dollar, NotepadFill } from '@tareqnmd/react-icon-lib';
import Feature from './Feature';

const features = [
	{
		id: 1,
		name: 'Hisab',
		link: '/hisab',
		icon: <Dollar />,
	},
	{
		id: 2,
		name: 'Note',
		link: '/note',
		icon: <NotepadFill />,
	},
];

const Features = () => {
	return (
		<div className="grid place-items-center w-full h-full">
			<div className="grid grid-cols-2 md:grid-cols-3 gap-3 w-full m-auto md:max-w-[75%] xl:max-w-[50%]">
				{features?.map((module: any) => (
					<Feature
						key={module?.link}
						module={module}
					/>
				))}
			</div>
		</div>
	);
};

export default Features;
