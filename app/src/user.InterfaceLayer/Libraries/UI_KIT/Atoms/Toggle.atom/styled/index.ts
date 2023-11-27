import styled from "styled-components";

import { commonToggleStyles } from "../const/commonToggleStyles";
import { ToggleStyleProps } from "../type";

export const Checkbox = styled.input``;

export const Radio = styled.input<ToggleStyleProps>`
	${commonToggleStyles};
	appearance: none;
	border-radius: 50%;
	background-clip: content-box;
	&:focus {
		border: ${(props) => props.borderRadio};
	}
	&:checked {
		background-color: ${(props) => props.color};
	}
`;
