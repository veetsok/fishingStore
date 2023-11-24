import React from "react";
import Text from "user.InterfaceLayer/Libraries/UI_KIT/Atoms/Text.atom";

import * as ST from "./styled";
import InputMethod from "../../Atoms/InputMethod/index";
import TextEnum from "../../Atoms/Text.atom/enum";

interface PayBlockProps {
	name: string;
	value: any;
	checked: any;
	onChange: any;
}

const PayBlock: React.FC<PayBlockProps> = ({
	name,
	value,
	checked,
	onChange,
}: PayBlockProps) => {
	return (
		<ST.text>
			<InputMethod
				onChange={onChange}
				name={name}
				value={value}
				checked={checked}
			/>
			<Text type={TextEnum.enum_Text_H5}>{name}</Text>
		</ST.text>
	);
};

export default PayBlock;
