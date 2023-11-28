import { css } from "styled-components";

import { IInputStyleProps } from "../../type";

export const InputCommonStyle = css<IInputStyleProps>`
	cursor: pointer;
	margin: ${(props) => props.margin};
	width: ${(props) => (props.width ? props.width : "auto")};
	padding: ${(props) => (props.padding ? props.padding : "20px 30px")};
	background: ${(props) => props.background};
	border: ${(props) => props.border};
	color: ${(props) => props.color};
	border-radius: ${(props) => props.borderRadius};
`;
