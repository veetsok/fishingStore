import styled from "styled-components";

import Colors from "../../../../constants/colors";
import commonButtonFonts from "../constants/commonButtonFonts";
import ButtonEnum from "../enum";

interface Button {
	isLoading?: boolean;
}

export const DefaultButton = styled.button<Button>`
	border-radius: 5px;
	background: ${Colors.BLUE__PRIMARY};
	color: ${Colors.WHITE};
	width: 100%;
	padding: 20px 30px;
	justify-content: center;
	font-family: ${commonButtonFonts[ButtonEnum.enum_defaultButton].fontFamily};
	font-size: ${commonButtonFonts[ButtonEnum.enum_defaultButton].fontSize};
	font-style: ${commonButtonFonts[ButtonEnum.enum_defaultButton].fontStyle};
	font-weight: ${commonButtonFonts[ButtonEnum.enum_defaultButton].fontWeight};
	line-height: ${commonButtonFonts[ButtonEnum.enum_defaultButton].lineHeight};
	letter-spacing: ${commonButtonFonts[ButtonEnum.enum_defaultButton]
		.letterSpacing};
`;

export const ButtonCatalog = styled.button`
	display: inline-block;
	padding: 15px 25px;
	margin: 0 5px;
	align-items: flex-start;
	gap: 10px;
	border-radius: 100px;
	background: var(--light-blue, ${Colors.CATALOG__BG});
	color: var(--black, ${Colors.BG__FOOTER});
	font-family: ${commonButtonFonts[ButtonEnum.enum_defaultButton].fontFamily};
	font-size: ${commonButtonFonts[ButtonEnum.enum_defaultButton].fontSize};
	font-style: ${commonButtonFonts[ButtonEnum.enum_defaultButton].fontStyle};
	font-weight: ${commonButtonFonts[ButtonEnum.enum_defaultButton].fontWeight};
	line-height: ${commonButtonFonts[ButtonEnum.enum_defaultButton].lineHeight};
	letter-spacing: ${commonButtonFonts[ButtonEnum.enum_defaultButton]
		.letterSpacing};
	border: 2px solid transparent;
	transition: all 0.3s;
	&:hover {
		border: 2px solid var(--blue, ${Colors.BLUE__PRIMARY});
		background: var(--light-blue, ${Colors.CATALOG__BG});
		color: var(--black, ${Colors.BG__FOOTER});
	}
`;

export const ButtonAccount = styled.button`
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

export const Button = styled.div<Button>``;
