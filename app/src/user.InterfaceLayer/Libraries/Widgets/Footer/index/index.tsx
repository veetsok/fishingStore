import React from "react";
import Logo from "user.InterfaceLayer/Libraries/UI_KIT/Atoms/Logo/index/Logo";
import Category from "user.InterfaceLayer/Libraries/UI_KIT/Molecules/Category.molecule/index/Category";
import { useTranslation } from "react-i18next";
import Button from "user.InterfaceLayer/Libraries/UI_KIT/Atoms/Button.atom";
import ButtonEnum from "user.InterfaceLayer/Libraries/UI_KIT/Atoms/Button.atom/enum";
import Colors from "user.InterfaceLayer/constants/colors";

import * as ST from "../styled/styled";

const Footer = () => {
	const { t } = useTranslation();

	return (
		<ST.footer>
			<Logo desciption={t("navbar.logo")} />
			<Category text={t("navbar.NavbarText", { returnObjects: true })} />
			<Button
				color={`${Colors.WHITE}`}
				border={`1px solid ${Colors.WHITE}`}
				type={ButtonEnum.enum_accountButton}
			>
				{t("footer.lk")}
			</Button>
		</ST.footer>
	);
};

export default Footer;
