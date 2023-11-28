import React from "react";
import TextEnum from "user.InterfaceLayer/Libraries/UI_KIT/Atoms/Text.atom/enum";
import ButtonAtom from "user.InterfaceLayer/Libraries/UI_KIT/Atoms/Button.atom";
import ButtonEnum from "user.InterfaceLayer/Libraries/UI_KIT/Atoms/Button.atom/enum";
import Colors from "user.InterfaceLayer/constants/colors";
import TextAtom from "user.InterfaceLayer/Libraries/UI_KIT/Atoms/Text.atom";
import OrderBlock from "user.InterfaceLayer/Libraries/UI_KIT/Molecules/OrderBlock";

import * as ST from "../styled/styled";
import { OrdersProps } from "../type";

const Orders: React.FC<OrdersProps> = ({ orders, handleClearOrder }) => {
	return (
		<>
			<TextAtom type={TextEnum.enum_Text_H2}>Мои заказы</TextAtom>
			{orders.map((order) => (
				<ST.order key={order.id}>
					<ST.title>
						<>
							<TextAtom type={TextEnum.enum_Text_H6}>
								Заказ <span>от {order.id}</span>
							</TextAtom>
						</>
						<TextAtom
							color={`${Colors.BLUE__PRIMARY}`}
							type={TextEnum.enum_Text_H5}
						>
							{order.total} ₽
						</TextAtom>
					</ST.title>
					<>
						{order.items.map((item) => (
							<OrderBlock
								key={item.id}
								name={item.name}
								image={item.image}
								price={item.price}
								quantity={item.quantity}
							/>
						))}
					</>
					<ST.sub>
						<ButtonAtom
							type={ButtonEnum.enum_accountButton}
							onClick={() => handleClearOrder(order.id)}
							padding="15px 20px"
							border={`1px solid ${Colors.INPUT}`}
							color={`${Colors.INPUT}`}
						>
							Удалить заказ
						</ButtonAtom>

						<>
							<TextAtom
								type={TextEnum.enum_Text_H5}
								color={`${Colors.CART__PRICE}`}
							>
								Способ оплаты: {order.paymentMethod}
							</TextAtom>
							<TextAtom
								type={TextEnum.enum_Text_H5}
								color={`${Colors.CART__PRICE}`}
							>
								Способ доставки: {order.deliveryMethod}
							</TextAtom>
						</>
					</ST.sub>
				</ST.order>
			))}
		</>
	);
};

export default Orders;
