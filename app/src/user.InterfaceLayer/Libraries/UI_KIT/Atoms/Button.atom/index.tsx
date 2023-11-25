import React from "react";

import * as ST from "./styled/styled";
import ButtonEnum from "./enum";
import { IButtonPropsDefault } from "./mock";
import { ButtonType } from "./type";

const Button: React.FC<ButtonType> = (props: ButtonType) => {
	const { children, onClick, active, type, padding, margin, width, isLoading } =
		props;
	if (isLoading) return <>Loading</>;
	switch (type) {
		case ButtonEnum.enum_primaryButton: {
			return (
				<ST.PrimaryButton
					onClick={onClick}
					padding={padding}
					margin={margin}
					width={width}
					isLoading={isLoading}
				>
					{children}
				</ST.PrimaryButton>
			);
		}
		case ButtonEnum.enum_accountButton: {
			return (
				<ST.AccountButton
					onClick={onClick}
					padding={padding}
					margin={margin}
					width={width}
					isLoading={isLoading}
				>
					{children}
				</ST.AccountButton>
			);
		}
		case ButtonEnum.enum_catalogButton: {
			return (
				<ST.CatalogButton
					onClick={onClick}
					padding={padding}
					margin={margin}
					width={width}
					isLoading={isLoading}
					active={active}
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
