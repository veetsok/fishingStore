import React from "react";
import { useTranslation } from "react-i18next";
import Button from "user.InterfaceLayer/Libraries/UI_KIT/Atoms/Button.atom";
import ButtonEnum from "user.InterfaceLayer/Libraries/UI_KIT/Atoms/Button.atom/enum";
import Text from "user.InterfaceLayer/Libraries/UI_KIT/Atoms/Text.atom";
import TextEnum from "user.InterfaceLayer/Libraries/UI_KIT/Atoms/Text.atom/enum";
import Colors from "user.InterfaceLayer/constants/colors";

import * as ST from "../styled/styled";

type Props = {
	// id: number;
	image: string;
	price: number;
	name: string;

	handleAddToCart: any;
};

const Card = ({ name, image, price, handleAddToCart }: Props) => {
	const { t } = useTranslation();

	return (
		<ST.container>
			<ST.block>
				<ST.image>
					<img
						src={image}
						alt={name}
					/>
				</ST.image>
				<ST.title>
					<Text type={TextEnum.enum_Text_H3}>{name}</Text>
				</ST.title>
				<ST.price>
					<Text
						color={`${Colors.CART__PRICE}`}
						type={TextEnum.enum_Text_H4}
					>
						{price} ₽
					</Text>
				</ST.price>
				<ST.btn onClick={handleAddToCart}>
					<Button type={ButtonEnum.enum_primaryButton}>
						{t("main.button")}
					</Button>
				</ST.btn>
			</ST.block>
		</ST.container>
	);
};

export default Card;
