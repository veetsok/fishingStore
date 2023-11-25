import { ICommonComponentProps } from "user.InterfaceLayer/constants/commonComponentProps";

import TextEnum from "../enum";

export interface TextType extends ICommonComponentProps, TextStyleProps {
	type: TextEnum;
	children?: ICommonComponentProps["children"];
	isLoading?: ICommonComponentProps["isLoading"];
}
export interface TextStyleProps {
	isLoading?: ICommonComponentProps["isLoading"];
	color?: ICommonComponentProps["color"];
	margin?: ICommonComponentProps["margin"];
	align?: ICommonComponentProps["align"];
}