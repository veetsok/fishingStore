import styled from "styled-components";
import { fonts } from "user.InterfaceLayer/Libraries/constants/fonts";
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
	color: var(--black-2, ${Colors.CART__PRICE});
	font-family: ${fonts.cardPrice.fontFamily};
	font-size: ${fonts.cardPrice.fontSize};
	font-style: ${fonts.cardPrice.fontStyle};
	font-weight: ${fonts.cardPrice.fontWeight};
	line-height: ${fonts.cardPrice.lineHeight};
`;
export const count__svg = styled.div`
	svg {
		cursor: pointer;
		fill: var(--blue, ${Colors.BLUE__PRIMARY});
	}
`;

export const remove = styled.div`
	svg {
		cursor: pointer;
		top: 0;
		right: 0;
		position: absolute;
		width: 60px;
		height: 60px;
		fill: ${Colors.BLUE__PRIMARY};
		&:hover {
		}
	}
`;
export const count__counter = styled.div`
	margin: 0 10px;
`;
