import { ICommonComponentProps } from "user.InterfaceLayer/constants/commonComponentProps";

export interface CheckTotalProps {
	total: string;
	quantity: string;
	link: string;
	textButton: string;
	textTitle: string;
	textQuantity: string;
	textTotal: string;
	onClick: ICommonComponentProps["onClick"];
}
