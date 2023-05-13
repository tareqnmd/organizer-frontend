import styled from '@emotion/styled';

const MainBodyWrapper = styled.div`
	background: linear-gradient(
		83deg,
		rgba(14, 28, 54, 1) 0%,
		rgba(23, 50, 101, 1) 50%
	);
	display: grid;
	grid-template-rows: 60px auto 40px;
	height: 100vh;
	main {
		padding: 10px;
	}
`;

export default MainBodyWrapper;
