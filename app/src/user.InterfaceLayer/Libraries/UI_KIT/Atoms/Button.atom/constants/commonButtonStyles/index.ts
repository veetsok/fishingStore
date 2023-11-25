import { css } from "styled-components";

import { ButtonStyleProps } from "../../type";

export const commonButtonStyles = css<ButtonStyleProps>`
	display: inline-flex;
	justify-content: center;
	align-items: center;
	gap: 10px;
	border-radius: 5px;
	margin: ${(props) => props.margin};
	width: ${(props) => (props.width ? props.width : "auto")};
	padding: ${(props) => (props.padding ? props.padding : "20px 30px")};
`;
