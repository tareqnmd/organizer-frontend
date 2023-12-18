import { Col, Row } from 'antd';
import FeaturedNote from './FeaturedNote';
import PinnedNotes from './PinnedNotes';
import RecentNotes from './RecentNotes';

const Note = () => {
	return (
		<Row gutter={24}>
			<Col span={12}>
				<FeaturedNote />
			</Col>
			<Col span={6}>
				<RecentNotes />
			</Col>
			<Col span={6}>
				<PinnedNotes />
			</Col>
		</Row>
	);
};

export default Note;
