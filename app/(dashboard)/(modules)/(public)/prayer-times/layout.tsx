import { Metadata } from 'next';

export const metadata: Metadata = {
	title: {
		template: '%s | Prayer Times',
		default: 'Prayer Times',
	},
};

const PrayerTimesLayout = ({ children }: { children: React.ReactNode }) => {
	return children;
};

export default PrayerTimesLayout;
