import styled from "styled-components";
import { fonts } from "user.InterfaceLayer/Libraries/constants/fonts";
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
export const data = styled.div``;
export const sub = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 15px 20px;
`;
export const subMethods = styled.div``;

export const div = styled.div`
	color: ${Colors.CART__PRICE}
	font-family: ${fonts.textOrder.fontFamily};
	font-size: ${fonts.textOrder.fontSize};
	font-style: ${fonts.textOrder.fontStyle};
	font-weight: ${fonts.textOrder.fontWeight};
	line-height: ${fonts.textOrder.lineHeight};
`;

export const block = styled.div`
	flex-direction: column;
	padding: 15px 20px;
	display: flex;
	justify-content: space-between;
`;

