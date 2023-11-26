import styled from "styled-components";
import Colors from "user.InterfaceLayer/constants/colors";

export const block = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	padding: 18px;
	margin: 20px 0;
	background: ${Colors.WHITE};
	box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
	border-radius: 30px;
`;

export const list = styled.div`
	margin-left: 23px;
`;

export const count = styled.div`
	display: flex;
	margin-top: 10px;
`;
