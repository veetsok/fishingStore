import styled from "styled-components";
import Colors from "user.InterfaceLayer/constants/colors";

import commonButtonFonts from "../constants/fonts";
import ButtonEnum from "../enum";
import { ButtonStyleProps } from "../type";
import { commonButtonStyles } from "../constants/commonButtonStyles";
import { commonButtonAnimate } from "../constants/commonButtonStyles/animation";

export const PrimaryButton = styled.button<ButtonStyleProps>`
	${commonButtonStyles};
	background: ${Colors.BLUE__PRIMARY};
	color: ${Colors.WHITE};
	font-family: ${commonButtonFonts[ButtonEnum.enum_primaryButton].fontFamily};
	font-size: ${commonButtonFonts[ButtonEnum.enum_primaryButton].fontSize};
	font-style: ${commonButtonFonts[ButtonEnum.enum_primaryButton].fontStyle};
	font-weight: ${commonButtonFonts[ButtonEnum.enum_primaryButton].fontWeight};
	line-height: ${commonButtonFonts[ButtonEnum.enum_primaryButton].lineHeight};
	letter-spacing: ${commonButtonFonts[ButtonEnum.enum_primaryButton]
		.letterSpacing};
`;

export const AccountButton = styled.button<ButtonStyleProps>`
	${commonButtonStyles};
	font-family: ${commonButtonFonts[ButtonEnum.enum_accountButton].fontFamily};
	font-size: ${commonButtonFonts[ButtonEnum.enum_accountButton].fontSize};
	font-style: ${commonButtonFonts[ButtonEnum.enum_accountButton].fontStyle};
	font-weight: ${commonButtonFonts[ButtonEnum.enum_accountButton].fontWeight};
	line-height: ${commonButtonFonts[ButtonEnum.enum_accountButton].lineHeight};
	letter-spacing: ${commonButtonFonts[ButtonEnum.enum_accountButton]
		.letterSpacing};
`;

export const CatalogButton = styled.button<ButtonStyleProps>`
	${commonButtonStyles};
	${commonButtonAnimate};
	border-radius: 100px;
	border: 2px solid transparent;
	background: ${(props) =>
		props.active ? Colors.BLUE__PRIMARY : Colors.CATALOG__BG};
	color: ${(props) => (props.active ? Colors.WHITE : Colors.TEXT__PRIMARY)};

	font-family: ${commonButtonFonts[ButtonEnum.enum_catalogButton].fontFamily};
	font-size: ${commonButtonFonts[ButtonEnum.enum_catalogButton].fontSize};
	font-style: ${commonButtonFonts[ButtonEnum.enum_catalogButton].fontStyle};
	font-weight: ${commonButtonFonts[ButtonEnum.enum_catalogButton].fontWeight};
	line-height: ${commonButtonFonts[ButtonEnum.enum_catalogButton].lineHeight};
`;

export const Button = styled.div<ButtonStyleProps>``;
