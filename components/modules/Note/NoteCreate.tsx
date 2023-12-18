import { Col, Row } from 'antd';
import NoteForm from './NoteForm';
import RecentNotes from './RecentNotes';

const NoteCreate = () => {
	return (
		<Row gutter={24}>
			<Col span={8}>
				<RecentNotes />
			</Col>
			<Col span={16}>
				<NoteForm />
			</Col>
		</Row>
	);
};

export default NoteCreate;
