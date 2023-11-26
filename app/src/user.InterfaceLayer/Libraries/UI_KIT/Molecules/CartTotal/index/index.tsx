import React from "react";
import { Link } from "react-router-dom";
import ButtonAtom from "user.InterfaceLayer/Libraries/UI_KIT/Atoms/Button.atom";
import ButtonEnum from "user.InterfaceLayer/Libraries/UI_KIT/Atoms/Button.atom/enum";

import * as ST from "../styled/styled";

interface CartTotalProps {
	total: any;
	quantity: any;
	link: any;
	textButton: any;
	textTitle: any;
	textQuantity: any;
	textTotal: any;
}

const CartTotal: React.FC<CartTotalProps> = ({
	total,
	quantity,
	link,
	textTitle,
	textButton,
	textQuantity,
	textTotal,
}: CartTotalProps) => {
	return (
		<ST.total>
			<ST.block>
				<ST.title>{textTotal}:</ST.title>
				<ST.price> {total} ₽</ST.price>
			</ST.block>
			<ST.block>
				<ST.subtitle>{textTitle}</ST.subtitle>
				<ST.quantity>
					{quantity} {textQuantity}
				</ST.quantity>
			</ST.block>
			<Link to={link}>
				<ButtonAtom
					width="100%"
					margin="20px 0 0 0"
					type={ButtonEnum.enum_primaryButton}
				>
					{textButton}
				</ButtonAtom>
			</Link>
		</ST.total>
	);
};

export default CartTotal;
