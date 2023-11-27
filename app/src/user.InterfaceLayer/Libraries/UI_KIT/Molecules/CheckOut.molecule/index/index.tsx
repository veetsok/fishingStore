import React from "react";
import Text from "user.InterfaceLayer/Libraries/UI_KIT/Atoms/Text.atom";
import TextEnum from "user.InterfaceLayer/Libraries/UI_KIT/Atoms/Text.atom/enum";

import * as ST from "../styled/styled";
import PayBlock from "../../PayBlock";

interface CheckMethodProps {
	selectedPayment: any;
	selectedDelivery: any;
	payment: any;
	delivery: any;
	handleSelectPayment: any;
	handleSelectDelivery: any;
	textPaymentTitle: any;
	textDeliveryTitle: any;
}

const CheckMethod: React.FC<CheckMethodProps> = ({
	payment,
	delivery,
	selectedPayment,
	selectedDelivery,
	handleSelectPayment,
	handleSelectDelivery,
	textPaymentTitle,
	textDeliveryTitle,
}: CheckMethodProps) => {
	return (
		<ST.container>
			<ST.subtitle>
				<Text type={TextEnum.enum_Text_H2}>{textPaymentTitle}</Text>
			</ST.subtitle>
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
				<ST.subtitle>
					<Text type={TextEnum.enum_Text_H2}>{textDeliveryTitle}</Text>
				</ST.subtitle>
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
