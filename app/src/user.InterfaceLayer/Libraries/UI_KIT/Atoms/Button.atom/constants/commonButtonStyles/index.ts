import { css } from "styled-components";
import Colors from "user.InterfaceLayer/constants/colors";

import { ButtonStyleProps } from "../../type";

export const commonButtonStyles = css<ButtonStyleProps>`
	display: inline-flex;
	justify-content: center;
	align-items: center;
	gap: 10px;
	border-radius: 5px;
	background: ${(props) =>
		props.background ? props.background : `${Colors.TRANSPARENT}`};
	margin: ${(props) => props.margin};
	width: ${(props) => (props.width ? props.width : "auto")};
	padding: ${(props) => (props.padding ? props.padding : "20px 30px")};
	border: ${(props) => props.border};
	color: ${(props) => props.color};
`;
