import NoteFooter from './NoteFooter';
import NoteNavbar from './NoteNavbar';

const NoteLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div id="note">
			<NoteNavbar />
			<main>{children}</main>
			<NoteFooter />
		</div>
	);
};

export default NoteLayout;
