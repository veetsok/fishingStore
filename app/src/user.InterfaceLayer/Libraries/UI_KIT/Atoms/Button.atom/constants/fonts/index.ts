import ButtonEnum from "../../enum";

const commonButtonFonts = {
	[ButtonEnum.enum_primaryButton]: {
		fontFamily: "Unbounded",
		fontSize: "18px",
		fontStyle: "normal",
		fontWeight: 400,
		lineHeight: "100%",
		letterSpacing: "0.64px",
	},
	[ButtonEnum.enum_catalogButton]: {
		fontFamily: "Unbounded",
		fontSize: "16px",
		fontStyle: "normal",
		fontWeight: 500,
		lineHeight: "150%",
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
