import React from "react";
import { Link } from "react-router-dom";
import Button from "user.InterfaceLayer/Libraries/UI_KIT/Atoms/Button.atom";
import ButtonEnum from "user.InterfaceLayer/Libraries/UI_KIT/Atoms/Button.atom/enum";
import TextAtom from "user.InterfaceLayer/Libraries/UI_KIT/Atoms/Text.atom";
import TextEnum from "user.InterfaceLayer/Libraries/UI_KIT/Atoms/Text.atom/enum";
import Colors from "user.InterfaceLayer/constants/colors";

import * as ST from "../styled/styled";
interface CheckTotalProps {
	total: any;
	type: any;
	quantity: any;
	link: any;
	textButton: any;
	textTitle: any;
	textQuantity: any;
	textTotal: any;
	handleCheckout: any;
}

const CheckTotal: React.FC<CheckTotalProps> = ({
	total,
	quantity,
	link,
	textTitle,
	textButton,
	textQuantity,
	textTotal,
	handleCheckout,
}: CheckTotalProps) => {
	return (
		<ST.total>
			<ST.totalBlock>
				<ST.block>
					<TextAtom
						type={TextEnum.enum_Text_H4}
						color={`${Colors.CART__PRICE}`}
					>
						{textTotal}:
					</TextAtom>
					<TextAtom
						type={TextEnum.enum_Text_H4}
						color={`${Colors.CART__PRICE}`}
					>
						{total} ₽
					</TextAtom>
				</ST.block>
				<ST.block>
					<TextAtom
						type={TextEnum.enum_Text_H5}
						color={`${Colors.TEXT__PRIMARY}`}
					>
						{textTitle}
					</TextAtom>
					<TextAtom
						type={TextEnum.enum_Text_H5}
						color={`${Colors.TEXT__PRIMARY}`}
					>
						{quantity} {textQuantity}
					</TextAtom>
				</ST.block>
			</ST.totalBlock>
			<Link
				onClick={handleCheckout}
				to={link}
			>
				<Button
					width="100%"
					type={ButtonEnum.enum_primaryButton}
				>
					{textButton}
				</Button>
			</Link>
		</ST.total>
	);
};

export default CheckTotal;
