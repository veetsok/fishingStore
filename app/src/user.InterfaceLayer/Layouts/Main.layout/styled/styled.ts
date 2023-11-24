import styled from "styled-components";
import Colors from "user.InterfaceLayer/constants/colors";

export const Container = styled.div`
	max-width: 1200px;
	margin: 0 auto;
`;

export const ResetContainer = styled.div`
	margin: 0 10px;
`;

export const NavContainer = styled.div`
	padding: 1.5625em 0;
	background: transparent;
`;

export const PageContainer = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
`;

export const MainContent = styled.div`
	flex: 1;
`;

export const FooterContainer = styled.div`
	background: ${Colors.TEXT__PRIMARY};
	border-radius: 20px 20px 0px 0px;
`;
