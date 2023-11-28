import React, { useState } from "react";
import { useAppSelector } from "business.InterfaceLayer/store/services/hooks/redux";
import Colors from "user.InterfaceLayer/constants/colors";

import TextAtom from "../../Atoms/Text.atom";
import TextEnum from "../../Atoms/Text.atom/enum";
import * as ST from "./styled/styled";
import OrderBlock from "../../Molecules/OrderBlock.molecule";
import ButtonAtom from "../../Atoms/Button.atom";
import ButtonEnum from "../../Atoms/Button.atom/enum";
import { order } from "./type";

const OrderHistory: React.FC = () => {
	const initialOrders = useAppSelector((state: any) => state.cart.orders);

	const [orders, setOrders] = useState(initialOrders);

	const handleClearOrder = (orderId: any) => {
		setOrders((prevOrders: any) =>
			prevOrders.filter((order: order) => order.id !== orderId)
		);
	};

	return (
		<>
			<TextAtom type={TextEnum.enum_Text_H2}>Мои заказы</TextAtom>
			{orders.map((order: order) => (
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

export default OrderHistory;
