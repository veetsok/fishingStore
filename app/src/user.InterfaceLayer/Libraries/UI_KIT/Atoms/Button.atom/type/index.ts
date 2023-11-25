import { ICommonComponentProps } from "user.InterfaceLayer/constants/commonComponentProps";

import ButtonEnum from "../enum";

export interface ButtonType extends ICommonComponentProps {
	type: ButtonEnum;
	children?: ICommonComponentProps["children"];
	Icon?: ICommonComponentProps["icon"];
	isLoading?: ICommonComponentProps["isLoading"];
	onClick?: ICommonComponentProps["onClick"];
	active?: ICommonComponentProps["active"];
	padding?: ICommonComponentProps["padding"];
	margin?: ICommonComponentProps["margin"];
	width?: ICommonComponentProps["width"];
}

export interface ButtonStyleProps {
	isLoading?: ICommonComponentProps["isLoading"];
	active?: ICommonComponentProps["active"];
	padding?: ICommonComponentProps["padding"];
	margin?: ICommonComponentProps["margin"];
	width?: ICommonComponentProps["width"];
}