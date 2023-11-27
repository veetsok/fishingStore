import styled from "styled-components";

import { commonToggleStyles } from "../const/commonToggleStyles";
import { ToggleStyleProps } from "../type";

export const Checkbox = styled.input``;

export const Radio = styled.input<ToggleStyleProps>`
	${commonToggleStyles};
	appearance: none;
	position: relative;
	border-radius: 50%;
	transition: all 0.3s ease-in-out;
	&:focus {
		border: ${(props) => props.borderRadio};
	}
	&:checked::before {
		content: "";
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 70%;
		height: 70%;
		border-radius: 50%;
		background-color: ${(props) => props.color};
	}
`;
