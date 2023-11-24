import { ICommonComponentProps } from "user.InterfaceLayer/constants/commonComponentProps";

import ImageEnum from "../enum";

export interface ImageType extends ICommonComponentProps {
	type: ImageEnum;
	children?: ICommonComponentProps["children"];
	icon?: ICommonComponentProps["icon"];
	isLoading?: ICommonComponentProps["isLoading"];
	background?: ICommonComponentProps["background"];
	src?: ICommonComponentProps["src"];
	onClick?: ICommonComponentProps["onClick"];
}

export interface ImageStyle {
	isLoading?: ImageType["isLoading"];
	background?: ImageType["background"];
}
