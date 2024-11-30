import PrayerTime from '@/components/modules/prayer-time/PrayerTime';

const Page = ({ searchParams = {} }) => {
	return <PrayerTime searchOptions={searchParams} />;
};

export default Page;
