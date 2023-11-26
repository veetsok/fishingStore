import styled from "styled-components";
import Colors from "user.InterfaceLayer/constants/colors";

export const order = styled.div`
	border-radius: 10px;
	border: 2px solid ${Colors.BG_SECOND};
	margin-bottom: 30px;
`;
export const title = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20px;
	border-radius: 10px;
	background: ${Colors.BG_SECOND};
	span {
		color: ${Colors.BLUE__PRIMARY};
	}
`;

export const sub = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 15px 20px;
`;

export const block = styled.div`
	flex-direction: column;
	padding: 15px 20px;
	display: flex;
	justify-content: space-between;
`;
