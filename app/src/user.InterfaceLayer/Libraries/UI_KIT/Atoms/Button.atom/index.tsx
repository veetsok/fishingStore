import React from "react";

import * as ST from "./styled/styled";
import ButtonEnum from "./enum";
import { IButtonPropsDefault } from "./mock";
import { ButtonType } from "./type";

const Button: React.FC<ButtonType> = (props: ButtonType) => {
	const { children, onClick, type, isLoading } = props;
	if (isLoading) return <>Loading</>;

	switch (type) {
		case ButtonEnum.enum_defaultButton: {
			return (
				<ST.DefaultButton
					children={children}
					onClick={onClick}
					isLoading={isLoading}
				/>
			);
		}
		case ButtonEnum.enum_catalogButton: {
			return (
				<ST.ButtonCatalog
					children={children}
					onClick={onClick}
					isLoading={isLoading}
				/>
			);
		}
		case ButtonEnum.enum_accountButton: {
			return (
				<ST.ButtonAccount
					children={children}
					onClick={onClick}
					isLoading={isLoading}
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
