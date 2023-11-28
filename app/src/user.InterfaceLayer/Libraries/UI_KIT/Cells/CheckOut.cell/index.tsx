import React from "react";
import Text from "user.InterfaceLayer/Libraries/UI_KIT/Atoms/Text.atom";
import TextEnum from "user.InterfaceLayer/Libraries/UI_KIT/Atoms/Text.atom/enum";

import * as ST from "./styled/styled";
import { CheckMethodProps } from "./type";
import PayBlock from "../../Molecules/PayBlock.molecule";

const CheckMethod: React.FC<CheckMethodProps> = (props: CheckMethodProps) => {
	const {
		payment,
		delivery,
		selectedPayment,
		selectedDelivery,
		handleSelectPayment,
		handleSelectDelivery,
		textPaymentTitle,
		textDeliveryTitle,
	} = props;

	return (
		<ST.container>
			<Text type={TextEnum.enum_Text_H2}>{textPaymentTitle}</Text>
			<ST.text>
				{payment.map((pay: any) => (
					<PayBlock
						key={pay.id}
						name={pay.name}
						value={pay.type}
						checked={selectedPayment === pay.type}
						onChange={() => handleSelectPayment(pay.type)}
					/>
				))}
			</ST.text>

			<ST.delivery>
				<Text type={TextEnum.enum_Text_H2}>{textDeliveryTitle}</Text>
				<ST.text>
					<ST.delivery_block>
						{delivery.map((del: any) => (
							<PayBlock
								key={del.id}
								name={del.name}
								value={del.type}
								checked={selectedDelivery === del.type}
								onChange={() => handleSelectDelivery(del.type)}
							/>
						))}
					</ST.delivery_block>
				</ST.text>
			</ST.delivery>
		</ST.container>
	);
};

export default CheckMethod;