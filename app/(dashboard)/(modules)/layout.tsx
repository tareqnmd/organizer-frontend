import { Metadata } from "next";

export const metadata: Metadata = {
	title: {
		template: '%s | Note',
		default: 'Note',
	},
};

const Layout = ({ children }: { children: React.ReactNode }) => {
	return <main className="w-dvw">{children}</main>;
};

export default Layout;
