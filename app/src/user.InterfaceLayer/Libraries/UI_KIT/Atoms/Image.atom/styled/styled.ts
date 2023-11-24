import styled from "styled-components";

import { ImageStyle } from "../type";

export const DefaultImage = styled.img<ImageStyle>`
	width: 100%;
`;

export const SvgImage = styled.div<ImageStyle>``;

export const DefaultSvg = styled.div<ImageStyle>`
	display: inline-flex;
	justify-content: center;
	align-items: center;
	& svg {
		width: 100%;
		height: 100%;
	}
`;

export const BackgroundImage = styled.div<ImageStyle>`
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

export const Image = styled.div<ImageStyle>``;
