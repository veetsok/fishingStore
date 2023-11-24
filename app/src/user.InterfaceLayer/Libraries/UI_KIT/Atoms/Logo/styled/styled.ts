import styled from "styled-components";
import { fonts } from "user.InterfaceLayer/Libraries/constants/fonts";
import Colors from "user.InterfaceLayer/constants/colors";

export const Logo = styled.div`
	a {
		color: ${Colors.LOGO};
	}
	font-family: ${fonts.primaryBtn.fontFamily};
	font-size: ${fonts.primaryBtn.fontSize};
	font-style: ${fonts.primaryBtn.fontStyle};
	font-weight: ${fonts.primaryBtn.fontWeight};
	line-height: ${fonts.primaryBtn.lineHeight};
	letter-spacing: ${fonts.primaryBtn.letterSpacing};
`;
