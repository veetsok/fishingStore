import { css } from "styled-components";
import Colors from "user.InterfaceLayer/constants/colors";

import { TextStyleProps } from "../../type";

export const commonTextStyles = css<TextStyleProps>`
	text-overflow: ellipsis;
	overflow: hidden;
	margin: 0;
	white-space: normal;
	color: ${Colors.TEXT__PRIMARY};
	margin: ${(props) => props.margin};
	text-align: ${(props) => props.align};
	color: ${(props) => props.color};
`;