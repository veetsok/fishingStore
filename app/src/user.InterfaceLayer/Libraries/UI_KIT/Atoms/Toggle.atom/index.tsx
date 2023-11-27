import React from "react";

import { ToggleProps, ToggleStyleProps } from "./type";
import * as ST from "./styled";
import ToggleTypeEnum from "./enum";

const Toggle: React.FC<ToggleProps & ToggleStyleProps> = (props) => {
	const { type, value, checked, name, onChange, ...otherProps } = props;

	switch (type) {
		case ToggleTypeEnum.CHECKBOX:
			return (
				<ST.Checkbox
					type={ToggleTypeEnum.CHECKBOX}
					onChange={onChange}
					name={name}
					value={value}
					checked={checked}
				/>
			);
		case ToggleTypeEnum.RADIO:
			return (
				<ST.Radio
					type={ToggleTypeEnum.RADIO}
					onChange={onChange}
					name={name}
					value={value}
					checked={checked}
					{...otherProps}
				/>
			);
		default: {
			return <ST.Checkbox>Ошибка</ST.Checkbox>;
		}
	}
};

export default Toggle;
