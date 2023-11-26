import React from "react";

import * as ST from "./styled/styled";
import ButtonEnum from "./enum";
import { IButtonPropsDefault } from "./mock";
import { ButtonStyleProps, ButtonType } from "./type";

const Button: React.FC<ButtonType & ButtonStyleProps> = (props) => {
	const { children, onClick, active, type, isLoading, ...otherProps } = props;
	if (isLoading) return <>Loading</>;
	switch (type) {
		case ButtonEnum.enum_primaryButton: {
			return (
				<ST.PrimaryButton
					onClick={onClick}
					isLoading={isLoading}
					{...otherProps}
				>
					{children}
				</ST.PrimaryButton>
			);
		}
		case ButtonEnum.enum_accountButton: {
			return (
				<ST.AccountButton
					onClick={onClick}
					isLoading={isLoading}
					{...otherProps}
				>
					{children}
				</ST.AccountButton>
			);
		}
		case ButtonEnum.enum_catalogButton: {
			return (
				<ST.CatalogButton
					onClick={onClick}
					isLoading={isLoading}
					active={active}
					{...otherProps}
				>
					{children}
				</ST.CatalogButton>
			);
		}
		default: {
			return <ST.Button>Ошибка</ST.Button>;
		}
	}
};

Button.defaultProps = IButtonPropsDefault;
export default React.memo(Button);
