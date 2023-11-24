import React from "react";
import CartList from "user.InterfaceLayer/Libraries/Widgets/CartList/index";
import { useTranslation } from "react-i18next";
import Text from "user.InterfaceLayer/Libraries/UI_KIT/Atoms/Text.atom";
import TextEnum from "user.InterfaceLayer/Libraries/UI_KIT/Atoms/Text.atom/enum";

import * as ST from "../styled";

const CartComponent = () => {
	const { t } = useTranslation();

	return (
		<ST.container>
			<Text type={TextEnum.enum_Text_H1}>{t("cart.title")}</Text>

			<CartList
				paragragh={t("cart.emptyCart.paragragh")}
				span={t("cart.emptyCart.span")}
				textTitle={t("cart.cartTotal.title")}
				textButton={t("cart.cartTotal.button")}
				textQuantity={t("cart.cartTotal.quantity")}
				textTotal={t("cart.cartTotal.total")}
				clearText={t("cart.cartTotal.clearText")}
			/>
		</ST.container>
	);
};

export default CartComponent;
