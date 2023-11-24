import React from "react";
import { useTranslation } from "react-i18next";
import Button from "user.InterfaceLayer/Libraries/UI_KIT/Atoms/Button.atom";
import ButtonEnum from "user.InterfaceLayer/Libraries/UI_KIT/Atoms/Button.atom/enum";

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
				<ST.title>{name}</ST.title>
				<ST.price>{price} ₽</ST.price>
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
