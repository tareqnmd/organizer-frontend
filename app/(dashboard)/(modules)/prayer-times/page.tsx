import PrayerTime from '@/components/modules/prayer-time/PrayerTime';

const Page = ({ searchParams = { city: 'Dhaka', country: 'Bangladesh' } }) => {
	return <PrayerTime searchOptions={searchParams} />;
};

export default Page;
