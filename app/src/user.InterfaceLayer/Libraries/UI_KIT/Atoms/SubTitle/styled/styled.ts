import styled from "styled-components";
import { fonts } from "user.InterfaceLayer/Libraries/constants/fonts";
import Colors from "user.InterfaceLayer/constants/colors";

export const title = styled.h3`
	color:${Colors.TEXT__PRIMARY}
	font-family: ${fonts.title.fontFamily};
	font-size: 24px;
	font-style: ${fonts.title.fontStyle};
	font-weight: ${fonts.title.fontWeight};
	line-height: ${fonts.title.lineHeight};
	margin-bottom:30px;
`;
