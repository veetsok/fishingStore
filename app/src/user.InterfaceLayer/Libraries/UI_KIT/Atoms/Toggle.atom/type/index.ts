import { ICommonComponentProps } from "user.InterfaceLayer/constants/commonComponentProps";

import ToggleTypeEnum from "../enum";

export interface ToggleProps {
	type: ToggleTypeEnum;
	children?: ICommonComponentProps["children"];
	checked?: ICommonComponentProps["checked"];
	value?: ICommonComponentProps["value"];
	onChange?: ICommonComponentProps["onChange"];
	name?: ICommonComponentProps["name"];
}

export interface ToggleStyleProps {
	margin?: ICommonComponentProps["margin"];
	padding?: ICommonComponentProps["padding"];
	width?: ICommonComponentProps["width"];
	height?: ICommonComponentProps["height"];
	border?: ICommonComponentProps["border"];
	color?: ICommonComponentProps["color"];
	// Radio
	borderRadio?: ICommonComponentProps["border"];
}
