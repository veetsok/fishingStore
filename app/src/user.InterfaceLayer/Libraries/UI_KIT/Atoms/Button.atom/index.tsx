import React from "react";

import * as ST from "./styled/styled";
import ButtonEnum from "./enum";
import { IButtonPropsDefault } from "./mock";
import { ButtonType } from "./type";

const Button: React.FC<ButtonType> = (props: ButtonType) => {
	const { children, onClick, type, isLoading } = props;
	if (isLoading) return <>Loading</>;
	switch (type) {
		case ButtonEnum.enum_primaryButton: {
			return (
				<ST.PrimaryButton
					onClick={onClick}
					isLoading={isLoading}
					children={children}
				/>
			);
		}
		default: {
			return <ST.Button>Ошибка</ST.Button>;
		}
	}
};

Button.defaultProps = IButtonPropsDefault;
export default Button;
