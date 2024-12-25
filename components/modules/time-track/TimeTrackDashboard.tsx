import ActiveTimeTracks from './tracks/TimeTracksActive';
import RecentTimeTracks from './tracks/TimeTracksRecent';
import TimeTrackStart from './tracks/TimeTrackStart';

const TimeTrackDashboard = () => {
	return (
		<div className="grid grid-cols-12 gap-4">
			<div className="basic-card col-span-full rounded-md p-4 active:scale-100 md:col-span-4">
				<TimeTrackStart />
			</div>
			<div className="basic-card col-span-full flex flex-col gap-2 rounded-md p-4 active:scale-100 md:col-span-8">
				<ActiveTimeTracks />
				<RecentTimeTracks />
			</div>
		</div>
	);
};

export default TimeTrackDashboard;
