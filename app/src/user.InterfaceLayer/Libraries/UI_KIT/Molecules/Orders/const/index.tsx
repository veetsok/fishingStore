import React from "react";
import TextEnum from "user.InterfaceLayer/Libraries/UI_KIT/Atoms/Text.atom/enum";
import Text from "user.InterfaceLayer/Libraries/UI_KIT/Atoms/Text.atom";
import ButtonAtom from "user.InterfaceLayer/Libraries/UI_KIT/Atoms/Button.atom";
import ButtonEnum from "user.InterfaceLayer/Libraries/UI_KIT/Atoms/Button.atom/enum";
import Colors from "user.InterfaceLayer/constants/colors";

import OrderBlock from "../../OrderBlock/index";
import * as ST from "../styled/styled";

interface order {
	id: string;
	items: CartItem[];
	total: number;
	deliveryMethod: string;
	paymentMethod: string;
}

interface CartItem {
	id: string;
	quantity: number;
	name: string;
	price: number;
	image: string;
}

interface Props {
	orders: order[];
	handleClearOrder: any;
}

const Orders: React.FC<Props> = ({ orders, handleClearOrder }) => {
	return (
		<>
			<Text type={TextEnum.enum_Text_H2}>Мои заказы</Text>
			{orders.map((order) => (
				<ST.order key={order.id}>
					<ST.title>
						<ST.data>
							Заказ <span>от {order.id}</span>
						</ST.data>
						<Text
							color={`${Colors.BLUE__PRIMARY}`}
							type={TextEnum.enum_Text_H5}
						>
							{order.total} ₽
						</Text>
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

						<ST.subMethods>
							<ST.div>Способ оплаты: {order.paymentMethod}</ST.div>
							<ST.div>Способ доставки: {order.deliveryMethod}</ST.div>
						</ST.subMethods>
					</ST.sub>
				</ST.order>
			))}
		</>
	);
};

export default Orders;
