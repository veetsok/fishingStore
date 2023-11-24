import { ReactNode } from "react";

import TextEnum from "../enum";

interface TextType {
	type: TextEnum;
	children?: JSX.Element | ReactNode | string;
	isLoading?: boolean;
}

export default TextType;
