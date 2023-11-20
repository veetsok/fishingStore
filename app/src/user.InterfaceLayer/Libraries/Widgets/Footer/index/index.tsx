import React from "react";
import Logo from "user.InterfaceLayer/Libraries/UI_KIT/Atoms/Logo/index/Logo";
import ButtonLK from "user.InterfaceLayer/Libraries/UI_KIT/Atoms/ButtonLK/index";
import Category from "user.InterfaceLayer/Libraries/UI_KIT/Molecules/Category.molecule/index/Category";
import { useTranslation } from "react-i18next";

import * as ST from "../styled/styled";

const Footer = () => {
	const { t } = useTranslation();

	return (
		<ST.Container>
			<ST.Footer>
				<Logo desciption={t("navbar.logo")} />
				<Category text={t("navbar.NavbarText", { returnObjects: true })} />
				<ButtonLK desciption={t("footer.lk")} />
			</ST.Footer>
		</ST.Container>
	);
};

export default Footer;
