import { ICommonComponentProps } from "user.InterfaceLayer/constants/commonComponentProps";

import { ChecboxTypeEnum } from "../enum";

export interface CheckboxProps {
	type: ChecboxTypeEnum;
	children?: ICommonComponentProps["children"];
	checked?: ICommonComponentProps["checked"];
	value?: ICommonComponentProps["value"];
	onChange?: ICommonComponentProps["onChange"];
	name?: ICommonComponentProps["name"];
}
