import TextEnum from "../../enum";

const commonTextFonts = {
	[TextEnum.enum_Text_H1]: {
		fontFamily: "Unbounded",
		fontSize: "60px",
		fontStyle: "normal",
		fontWeight: 700,
		lineHeight: "120%",
	},
	[TextEnum.enum_Text_H2]: {
		fontFamily: "Unbounded",
		fontSize: "20px",
		fontStyle: "normal",
		fontWeight: 500,
		lineHeight: "135%",
	},
	[TextEnum.enum_Text_H3]: {
		fontFamily: "Unbounded",
		fontSize: "20px",
		fontStyle: "normal",
		fontWeight: 400,
		lineHeight: "135%",
	},
	[TextEnum.enum_Text_H4]: {
		fontSize: "20px",
		fontStyle: "normal",
		fontWeight: 400,
		lineHeight: "110%",
	},
	[TextEnum.enum_Text_H5]: {
		fontSize: "18px",
		fontStyle: "normal",
		fontWeight: 400,
		lineHeight: "100%",
	},
	[TextEnum.enum_Text_H6]: {
		fontSize: "16px",
		fontStyle: "normal",
		fontWeight: 400,
		lineHeight: "120%",
	},
};

export default commonTextFonts;
