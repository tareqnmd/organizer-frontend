import CommonNavLinks from '@/components/core/navbar/CommonNavLinks';
import CommonNavWrapper from '@/components/core/navbar/CommonNavWrapper';

const links = [
	{ path: '/note', name: 'Notes', exact: true },
	{ path: '/note/create', name: 'Create' },
];

const NoteNavbar = () => {
	return (
		<CommonNavWrapper>
			<CommonNavLinks links={links} />
		</CommonNavWrapper>
	);
};

export default NoteNavbar;
