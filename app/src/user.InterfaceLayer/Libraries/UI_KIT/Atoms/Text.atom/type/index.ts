import { ReactNode } from "react";

import TextEnum from "../enum";

export interface TextStyleProps {
	color?: string;
	margin?: string;
	align?: string;
	isLoading?: boolean;
}
export interface TextType {
	type: TextEnum;
	children?: JSX.Element | ReactNode | string;
	isLoading?: boolean;
	color?: string;
	margin?: string;
	align?: string;
}
