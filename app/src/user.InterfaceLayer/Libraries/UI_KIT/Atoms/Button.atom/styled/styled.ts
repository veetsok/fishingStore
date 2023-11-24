import styled from "styled-components";
import Colors from "user.InterfaceLayer/constants/colors";

import commonButtonFonts from "../constants/fonts";
import ButtonEnum from "../enum";

interface Button {
	isLoading?: boolean;
}

export const PrimaryButton = styled.button<Button>`
	border-radius: 5px;
	background: ${Colors.BLUE__PRIMARY};
	color: ${Colors.WHITE};
	width: 100%;
	padding: 20px 30px;
	justify-content: center;
	font-family: ${commonButtonFonts[ButtonEnum.enum_primaryButton].fontFamily};
	font-size: ${commonButtonFonts[ButtonEnum.enum_primaryButton].fontSize};
	font-style: ${commonButtonFonts[ButtonEnum.enum_primaryButton].fontStyle};
	font-weight: ${commonButtonFonts[ButtonEnum.enum_primaryButton].fontWeight};
	line-height: ${commonButtonFonts[ButtonEnum.enum_primaryButton].lineHeight};
	letter-spacing: ${commonButtonFonts[ButtonEnum.enum_primaryButton]
		.letterSpacing};
`;

export const AccountButton = styled.button<Button>`
	border-radius: 5px;
	border: 1px solid ${Colors.WHITE};
	background: ${Colors.TRANSPARENT};
	color: ${Colors.WHITE};
	padding: 20px 30px;
	font-family: ${commonButtonFonts[ButtonEnum.enum_accountButton].fontFamily};
	font-size: ${commonButtonFonts[ButtonEnum.enum_accountButton].fontSize};
	font-style: ${commonButtonFonts[ButtonEnum.enum_accountButton].fontStyle};
	font-weight: ${commonButtonFonts[ButtonEnum.enum_accountButton].fontWeight};
	line-height: ${commonButtonFonts[ButtonEnum.enum_accountButton].lineHeight};
	letter-spacing: ${commonButtonFonts[ButtonEnum.enum_accountButton]
		.letterSpacing};
`;

export const CatalogButton = styled.button<Button>`
	display: inline-block;
	padding: 15px 25px;
	align-items: flex-start;
	gap: 10px;
	border-radius: 100px;
	background: var(--light-blue, ${Colors.CATALOG__BG});
	color: var(--black, ${Colors.TEXT__PRIMARY});
	font-family: ${commonButtonFonts[ButtonEnum.enum_primaryButton].fontFamily};
	font-size: ${commonButtonFonts[ButtonEnum.enum_primaryButton].fontSize};
	font-style: ${commonButtonFonts[ButtonEnum.enum_primaryButton].fontStyle};
	font-weight: ${commonButtonFonts[ButtonEnum.enum_primaryButton].fontWeight};
	line-height: ${commonButtonFonts[ButtonEnum.enum_primaryButton].lineHeight};
	letter-spacing: ${commonButtonFonts[ButtonEnum.enum_primaryButton]
		.letterSpacing};
	border: 2px solid transparent;
	transition: all 0.3s;
	&:hover {
		border: 2px solid var(--blue, ${Colors.BLUE__PRIMARY});
		background: var(--light-blue, ${Colors.CATALOG__BG});
		color: var(--black, ${Colors.TEXT__PRIMARY});
	}
`;

export const Button = styled.div<Button>``;
