import FontsEnum from "user.InterfaceLayer/constants/fonts";

import TextEnum from "../../enum";

const commonTextFonts = {
	[TextEnum.enum_Text_H1]: {
		fontFamily: `${FontsEnum.Unbounded}`,
		fontSize: "60px",
		fontStyle: "normal",
		fontWeight: 700,
		lineHeight: "120%",
	},
	[TextEnum.enum_Text_H2]: {
		fontFamily: `${FontsEnum.Unbounded}`,
		fontSize: "24px",
		fontStyle: "normal",
		fontWeight: 700,
		lineHeight: "135%",
	},
	[TextEnum.enum_Text_H3]: {
		fontFamily: `${FontsEnum.Unbounded}`,
		fontSize: "20px",
		fontStyle: "normal",
		fontWeight: 500,
		lineHeight: "135%",
	},
	[TextEnum.enum_Text_H4]: {
		fontFamily: `${FontsEnum.Unbounded}`,
		fontSize: "20px",
		fontStyle: "normal",
		fontWeight: 400,
		lineHeight: "135%",
	},
	[TextEnum.enum_Text_H5]: {
		fontFamily: `${FontsEnum.OpenSans}`,
		fontSize: "16px",
		fontStyle: "normal",
		fontWeight: 500,
		lineHeight: "135%",
	},
	[TextEnum.enum_Text_H6]: {
		fontFamily: `${FontsEnum.OpenSans}`,
		fontSize: "18px",
		fontStyle: "normal",
		fontWeight: 500,
		lineHeight: "120%",
	},
};

export default commonTextFonts;
