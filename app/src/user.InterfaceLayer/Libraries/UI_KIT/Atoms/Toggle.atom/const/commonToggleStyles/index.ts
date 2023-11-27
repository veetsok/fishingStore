import { css } from "styled-components";

import { ToggleStyleProps } from "../../type";

export const commonToggleStyles = css<ToggleStyleProps>`
	margin: ${(props) => props.margin};
	padding: ${(props) => props.padding};
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	border: ${(props) => props.border};
	color: ${(props) => props.color};
`;
