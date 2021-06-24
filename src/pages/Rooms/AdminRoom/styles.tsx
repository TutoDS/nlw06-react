import { flexAlignment, flexSettings } from 'assets/styles/mixins';
import Letmeask from 'components/Letmeask';
import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
	overflow: hidden;
`;

export const Header = styled.header`
	padding: 24px;
	border-bottom: 1px solid
		${({ theme }) =>
			theme.title === 'dark'
				? shade(0.5, theme.colors.gray[200])
				: theme.colors.gray[200]};
`;

export const Content = styled.div`
	max-width: 1120px;

	${flexSettings()};
	${flexAlignment('center', 'space-between')};

	margin: 0 auto;

	div {
		${flexSettings()};
		${flexAlignment('center')};
		gap: 16px;

		> button {
			height: 40px;
		}
	}
`;

export const Logo = styled(Letmeask)`
	max-height: 45px;
`;

export const Main = styled.main`
	max-width: 800px;

	margin: 0 auto;
`;

export const RoomTitle = styled.div`
	margin: 32px 0 24px;
	${flexSettings()};
	${flexAlignment('center')}

	> h1 {
		font-family: 'Poppins', sans-serif;
		font-size: 24px;

		color: ${({ theme }) => theme.colors.text};
	}

	> span {
		padding: 8px 16px;
		margin-left: 16px;
		border-radius: 999px;

		background-color: ${({ theme }) => theme.colors.link};
		color: ${({ theme }) => theme.colors.white};
		font-size: 14px;
		font-weight: 500;
	}
`;

export const QuestionList = styled.section`
	max-height: 70vh;

	margin-top: 50px;

	${flexSettings('column')};
	gap: 10px;

	overflow-y: scroll;
`;
