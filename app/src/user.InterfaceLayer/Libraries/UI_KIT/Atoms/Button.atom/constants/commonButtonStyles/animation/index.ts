import { css } from "styled-components";
import Colors from "user.InterfaceLayer/constants/colors";

export const commonButtonAnimate = css`
	transition: all 0.3s;
	&:hover {
		border: 2px solid ${Colors.BLUE__PRIMARY};
		background: ${Colors.CATALOG__BG};
		color: ${Colors.TEXT__PRIMARY};
	}
`;
