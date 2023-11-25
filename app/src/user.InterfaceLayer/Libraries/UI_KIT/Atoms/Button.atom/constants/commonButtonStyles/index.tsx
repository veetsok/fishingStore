import { css } from "styled-components";
import Colors from "user.InterfaceLayer/constants/colors";
import FontsEnum from "user.InterfaceLayer/constants/fonts";

export const commonButtonStyles = css`
	display: inline-flex;
	padding: 10px 20px;
	justify-content: center;
	align-items: center;
	gap: 10px;
	border-radius: 5px;
	border: 1px solid ${Colors.TRANSPARENT};
	font-family: ${FontsEnum.Unbounded};
`;
