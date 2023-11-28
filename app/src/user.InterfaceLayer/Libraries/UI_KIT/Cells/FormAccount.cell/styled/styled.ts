import styled from "styled-components";
import { fonts } from "user.InterfaceLayer/Libraries/constants/fonts";
import Colors from "user.InterfaceLayer/constants/colors";

export const block = styled.div`
	display: flex;
	margin-bottom: 15px;
`;

export const Reddit = styled.button`
	display: inline-flex;
	padding: 15px 20px;
	justify-content: center;
	align-items: center;
	gap: 10px;
	border-radius: 5px;
	color: ${Colors.INPUT};
	text-align: center;
	font-family: ${fonts.secondaryBtn.fontFamily};
	font-size: ${fonts.secondaryBtn.fontSize};
	font-style: ${fonts.secondaryBtn.fontStyle};
	font-weight: ${fonts.secondaryBtn.fontWeight};
	line-height: ${fonts.secondaryBtn.lineHeight};
	letter-spacing: ${fonts.secondaryBtn.letterSpacing};
`;


