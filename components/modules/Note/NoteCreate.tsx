import { Col, Row } from 'antd';
import NoteForm from './NoteForm';

const NoteCreate = () => {
	return (
		<Row gutter={16}>
			<Col span={8}>recent</Col>
			<Col span={16}>
				<NoteForm />
			</Col>
		</Row>
	);
};

export default NoteCreate;
