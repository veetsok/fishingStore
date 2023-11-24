import styled from "styled-components";
import { fonts } from "user.InterfaceLayer/Libraries/constants/fonts";
import Colors from "user.InterfaceLayer/constants/colors";

export const text = styled.div`
	color: var(--black-2, ${Colors.CART__PRICE});
	font-family: ${fonts.textOrder.fontFamily};
	font-size: ${fonts.textOrder.fontFamily};
	font-style: ${fonts.textOrder.fontStyle};
	font-weight: ${fonts.textOrder.fontWeight};
	line-height: ${fonts.textOrder.lineHeight};
`;
