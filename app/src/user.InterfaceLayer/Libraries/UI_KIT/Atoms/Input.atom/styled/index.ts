import styled from "styled-components";
import Colors from "user.InterfaceLayer/constants/colors";

import load from "./animations/load";
import { InputCommonStyle } from "./commonInputStyles";

export const InputStyle = styled.input`
	${InputCommonStyle}
	display: flex;
	font-size: 18px;
	&:placeholder {
		color: ${Colors.INPUT};
	}

	&:active,
	&:focus,
	&:hover {
		border: 2px solid ${Colors.INPUT};
	}
`;

export const Error = styled.div`
	color: ${Colors.INPUT};
	font-size: 25px;
`;

export const Skeleton = styled.div`
	width: 100%;
	padding: 12px;
	border-radius: 12px;
	height: 40px;
	position: relative;
	box-shadow: 0 2px 10px 0 ${Colors.INPUT};
	overflow: hidden;

	&::before {
		content: "";
		display: block;
		position: absolute;
		left: -150px;
		top: 0;
		height: 100%;
		width: 80%;
		background: linear-gradient(
			to right,
			transparent 0%,
			${Colors.INPUT} 50%,
			transparent 100%
		);
		animation: ${load} 1.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
	}
`;
