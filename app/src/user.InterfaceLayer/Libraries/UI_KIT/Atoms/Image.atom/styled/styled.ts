import styled from "styled-components";

import { ImageStyleProps } from "../type";
import { commonImageStyles } from "../constants/commonButtonStyles";

export const SrcImage = styled.img<ImageStyleProps>`
	${commonImageStyles}
`;

export const NodeSvgImage = styled.div<ImageStyleProps>``;

export const DefaultSvg = styled.div<ImageStyleProps>`
	display: inline-flex;
	justify-content: center;
	align-items: center;
	& svg {
		width: 100%;
		height: 100%;
	}
`;

export const BackgroundImage = styled.div<ImageStyleProps>`
	background: ${(props) =>
		props.background
			? `no-repeat center/100% url(${props.background})`
			: "none"};
	width: 100%;
	margin: 0 auto;
	height: 100%;
	position: relative;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	justify-content: center;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	-ms-flex-direction: column;
	flex-direction: column;
`;

export const Image = styled.div<ImageStyleProps>``;
