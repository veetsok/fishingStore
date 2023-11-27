import React from "react";

import { CheckboxProps } from "./type";
import * as ST from "./styled";
import { ChecboxTypeEnum } from "./enum";

const Checkbox: React.FC<CheckboxProps> = (props) => {
	const { type, value, checked, onChange } = props;

	switch (type) {
		case ChecboxTypeEnum.CHECKBOX:
			return (
				<>
					<ST.Checkbox
						type={ChecboxTypeEnum.CHECKBOX}
						checked={checked}
						onChange={onChange}
						value={value}
					/>
				</>
			);
		case ChecboxTypeEnum.RADIO:
			return (
				<>
					<ST.Checkbox
						type="radio"
						onChange={onChange}
						value={value}
						checked={checked}
					/>
				</>
			);
		default: {
			return <ST.Checkbox>Ошибка</ST.Checkbox>;
		}
	}
};

export default Checkbox;
