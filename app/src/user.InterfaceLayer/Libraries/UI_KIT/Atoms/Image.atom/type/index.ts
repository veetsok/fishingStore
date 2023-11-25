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
	isLoading?: ImageType["isLoading"];
	background?: ImageType["background"];
	src?: ICommonComponentProps["src"];
	borderRadius?: string;
	height?: string;
}
