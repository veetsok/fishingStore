import React from "react";
import Text from "user.InterfaceLayer/Libraries/UI_KIT/Atoms/Text.atom";
import Colors from "user.InterfaceLayer/constants/colors";

import * as ST from "./styled/styled";
import TextEnum from "../../Atoms/Text.atom/enum";
import Toggle from "../../Atoms/Toggle.atom";
import ToggleTypeEnum from "../../Atoms/Toggle.atom/enum";
import { PayBlockProps } from "./type";

const PayBlock: React.FC<PayBlockProps> = (props: PayBlockProps) => {
	const { name, value, checked, onChange } = props;

	return (
		<ST.text>
			<Toggle
				width="24px"
				height="24px"
				padding="3px"
				border={`2px solid ${Colors.GRAY}`}
				borderRadio={`2px solid ${Colors.BLUE__PRIMARY}`}
				color={`${Colors.BLUE__PRIMARY}`}
				margin="0 10px 0 0"
				type={ToggleTypeEnum.RADIO}
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
