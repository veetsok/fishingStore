import { ICommonComponentProps } from "user.InterfaceLayer/constants/commonComponentProps";

import ImageEnum from "../enum";

export interface ImageType extends ICommonComponentProps, ImageStyleProps {
	type: ImageEnum;
	isLoading?: ICommonComponentProps["isLoading"];
	children?: ICommonComponentProps["children"];
	icon?: ICommonComponentProps["icon"];
	onClick?: ICommonComponentProps["onClick"];
}

export interface ImageStyleProps {
	isLoading?: ICommonComponentProps["isLoading"];
	background?: ICommonComponentProps["background"];
	src?: ICommonComponentProps["src"];
	borderRadius?: ICommonComponentProps["borderRadius"];
	height?: ICommonComponentProps["height"];
	width?: ICommonComponentProps["width"];
	margin?: ICommonComponentProps["margin"];
	fill?: ICommonComponentProps["margin"];
}
