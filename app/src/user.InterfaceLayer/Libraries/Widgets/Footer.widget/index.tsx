import React from "react";
import { Link } from "react-router-dom";
import Logo from "user.InterfaceLayer/Libraries/UI_KIT/Molecules/Logo.molecule/Logo";
import { useTranslation } from "react-i18next";
import Button from "user.InterfaceLayer/Libraries/UI_KIT/Atoms/Button.atom";
import ButtonEnum from "user.InterfaceLayer/Libraries/UI_KIT/Atoms/Button.atom/enum";
import Colors from "user.InterfaceLayer/constants/colors";
import Category from "user.InterfaceLayer/Libraries/UI_KIT/Molecules/Category.molecule";

import * as ST from "./styled/styled";

const Footer = () => {
	const { t } = useTranslation();

	return (
		<ST.footer>
			<Logo
				desciption={t("navbar.logo")}
				color={`${Colors.WHITE}`}
			/>
			<Category
				text={
					t("navbar.NavbarText", { returnObjects: true }) as {
						id: number;
						title: string;
					}[]
				}
			/>
			<Link to="/account">
				<Button
					color={`${Colors.WHITE}`}
					border={`1px solid ${Colors.WHITE}`}
					type={ButtonEnum.enum_accountButton}
				>
					{t("footer.lk")}
				</Button>
			</Link>
		</ST.footer>
	);
};

export default Footer;
