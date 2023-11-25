import { css } from "styled-components";

import { ImageStyleProps } from "../../type";

export const commonImageStyles = css<ImageStyleProps>`
	display: inline-flex;
	justify-content: center;
	align-items: center;
	border-radius: ${(props) =>
		props.borderRadius ? props.borderRadius : "10px"};
	width: ${(props) => (props.height ? props.height : "100%")};
	height: ${(props) => (props.height ? props.height : "auto")};
`;
