import ButtonEnum from "../../enum";

const commonButtonFonts = {
	[ButtonEnum.enum_defaultButton]: {
		fontFamily: "Unbounded",
		fontSize: "16px",
		fontStyle: "normal",
		fontWeight: 500,
		lineHeight: "150%",
		letterSpacing: "0.64px",
	},
	[ButtonEnum.enum_accountButton]: {
		fontFamily: "Unbounded",
		fontSize: "12px",
		fontStyle: "normal",
		fontWeight: 600,
		lineHeight: "120%",
		letterSpacing: "0.48px",
	},
};

export default commonButtonFonts;
