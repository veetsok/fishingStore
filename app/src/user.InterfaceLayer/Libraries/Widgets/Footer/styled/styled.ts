import styled from "styled-components";
import Colors from "user.InterfaceLayer/constants/colors";

export const Container = styled.div`
	max-width: 1200px;
	padding: 0 15px;
	margin: 0 auto;
`;

export const Footer = styled.div`
	a {
		color: ${Colors.WHITE};
	}
	display: flex;
	justify-content: space-between;
	align-items: center;
`;