import { ICommonComponentProps } from "user.InterfaceLayer/constants/commonComponentProps";

import ButtonEnum from "../enum";

export interface ButtonType extends ICommonComponentProps, ButtonStyleProps {
	type: ButtonEnum;
	children?: ICommonComponentProps["children"];
	Icon?: ICommonComponentProps["icon"];
	isLoading?: ICommonComponentProps["isLoading"];
	onClick?: ICommonComponentProps["onClick"];
}

export interface ButtonStyleProps {
	isLoading?: ICommonComponentProps["isLoading"];
	active?: ICommonComponentProps["active"];
	padding?: ICommonComponentProps["padding"];
	margin?: ICommonComponentProps["margin"];
	width?: ICommonComponentProps["width"];
}