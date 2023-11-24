import React from "react";
import CheckMethod from "user.InterfaceLayer/Libraries/UI_KIT/Molecules/CheckOut.molecule/index";
import EmptyCart from "user.InterfaceLayer/Libraries/UI_KIT/Molecules/EmpryCart/index";
import CheckTotal from "user.InterfaceLayer/Libraries/UI_KIT/Molecules/CheckTotal/index";
import { useAppSelector } from "business.InterfaceLayer/store/services/hooks/redux";
import Text from "user.InterfaceLayer/Libraries/UI_KIT/Atoms/Text.atom";
import TextEnum from "user.InterfaceLayer/Libraries/UI_KIT/Atoms/Text.atom/enum";

import * as ST from "../styled/styled";
import { CheckOutWidgetProps } from "../type";

const CheckOutWidget: React.FC<CheckOutWidgetProps> = ({
	delivery,
	payment,
	selectedPayment,
	selectedDelivery,
	handleSelectPayment,
	handleSelectDelivery,
	handleCheckout,
	textTitle,
	textButton,
	textQuantity,
	textTotal,
	textPaymentTitle,
	textDeliveryTitle,
}: CheckOutWidgetProps) => {
	const { total, quantity } = useAppSelector((state: any) => state.cart);

	return (
		<>
			<EmptyCart
				link="/ivanKosteev/fishing/cart"
				paragragh=""
				span="Вернуться к корзине"
			/>
			<Text type={TextEnum.enum_Text_H1}>Оформление заказа</Text>

			<ST.container>
				<ST.block>
					<CheckMethod
						textPaymentTitle={textPaymentTitle}
						textDeliveryTitle={textDeliveryTitle}
						selectedPayment={selectedPayment}
						selectedDelivery={selectedDelivery}
						handleSelectPayment={handleSelectPayment}
						handleSelectDelivery={handleSelectDelivery}
						delivery={delivery}
						payment={payment}
					/>
				</ST.block>
				<CheckTotal
					link="/ivanKosteev/fishing/account"
					type=""
					total={total}
					quantity={quantity}
					textTitle={textTitle}
					textButton={textButton}
					textQuantity={textQuantity}
					textTotal={textTotal}
					handleCheckout={handleCheckout}
				/>
			</ST.container>
		</>
	);
};

export default CheckOutWidget;
