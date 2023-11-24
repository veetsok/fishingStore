import { ICommonComponentProps } from "user.InterfaceLayer/constants/commonComponentProps";

import ButtonEnum from "../enum";

export interface ButtonType extends ICommonComponentProps {
	type: ButtonEnum;
	children?: ICommonComponentProps["children"];
	Icon?: JSX.Element | React.ReactNode | undefined;
	isLoading?: boolean;
	onClick?: () => void;
}
