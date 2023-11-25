import { css } from "styled-components";

import { ImageStyleProps } from "../../type";

export const commonImageStyles = css<ImageStyleProps>`
	display: inline-flex;
	align-content: center;
	justify-content: center;
	background: ${(props) =>
		props.background
			? `#fff 50% / contain no-repeat url(${props.background})`
			: "none"};
	border-radius: ${(props) =>
		props.borderRadius ? props.borderRadius : "10px"};
	height: ${(props) => (props.height ? props.height : "auto")};
	width: ${(props) => (props.width ? props.width : "100%")};
`;
