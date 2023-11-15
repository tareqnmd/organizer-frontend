import ModuleTab from './ModuleTab';

type ModuleLinks = { path: string; name: string; exact?: boolean }[];

const ModuleTabs = ({ links }: { links: ModuleLinks }) => {
	return (
		<div className="flex gap-4">
			{links.map((link, index) => (
				<ModuleTab
					key={index}
					link={link}
				/>
			))}
		</div>
	);
};

export default ModuleTabs;
