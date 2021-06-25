import { flexAlignment, flexSettings } from 'assets/styles/mixins';
import Letmeask from 'components/Letmeask';
import { shade, tint } from 'polished';
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
		gap: 10px;
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

export const QuestionForm = styled.form`
	> textarea {
		width: 100%;
		min-height: 130px;

		padding: 16px;
		border-radius: 8px;

		background-color: ${({ theme }) => theme.colors.boxBackground};
		box-shadow: ${({ theme }) => theme.shadows.textarea};
		color: ${({ theme }) => theme.colors.text};

		resize: vertical;

		&::placeholder,
		&:-ms-input-placeholder,
		&::-ms-input-placeholder {
			color: ${({ theme }) =>
				theme.title === 'dark'
					? theme.colors.gray[50]
					: theme.colors.gray[500]};
		}
	}
`;

export const FormFooter = styled.div`
	${flexSettings()};
	${flexAlignment('center', 'space-between')};

	margin-top: 16px;

	> span {
		font-size: 14px;
		color: ${({ theme }) =>
			theme.title === 'dark'
				? theme.colors.gray[200]
				: theme.colors.gray[500]};
		font-weight: 500;

		> button {
			box-shadow: none;

			color: ${({ theme }) => theme.colors.primary};
			text-decoration: underline;
			background-color: transparent;
			font-size: 14px;
			font-weight: 500;

			cursor: pointer;

			&:hover {
				color: ${({ theme }) =>
					theme.title === 'dark'
						? tint(0.25, theme.colors.primary)
						: shade(0.25, theme.colors.primary)};
			}
		}
	}
`;

export const QuestionList = styled.section`
	max-height: 70vh;

	margin-top: 50px;

	${flexSettings('column')};
	gap: 10px;

	overflow-y: scroll;
`;