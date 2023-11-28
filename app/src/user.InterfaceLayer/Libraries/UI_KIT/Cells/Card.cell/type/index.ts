import { ICommonComponentProps } from "user.InterfaceLayer/constants/commonComponentProps";

export interface CardProps {
	image?: string;
	price?: number;
	name?: string;
	onClick?: ICommonComponentProps["onClick"];
}
