import { ICommonComponentProps } from "user.InterfaceLayer/constants/commonComponentProps";

export interface PayBlockProps {
	name?: ICommonComponentProps["name"];
	value?: ICommonComponentProps["value"];
	checked?: ICommonComponentProps["checked"];
	onChange?: ICommonComponentProps["onChange"];
}
