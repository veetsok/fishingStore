import React from "react";
import Logo from "user.InterfaceLayer/Libraries/UI_KIT/Molecules/Logo.molecule/Logo";
import Category from "user.InterfaceLayer/Libraries/UI_KIT/Molecules/Category.molecule/Category";
import Profile from "user.InterfaceLayer/Libraries/UI_KIT/Molecules/Profile.molecule/Profile";
import { useTranslation } from "react-i18next";
import i18n from "user.InterfaceLayer/Components/I18next/i18n";
import ButtonAtom from "user.InterfaceLayer/Libraries/UI_KIT/Atoms/Button.atom";
import ButtonEnum from "user.InterfaceLayer/Libraries/UI_KIT/Atoms/Button.atom/enum";

import * as ST from "./styled/styled";

const Navbar: React.FC = () => {
	const { t } = useTranslation();

	const handleLanguageChange = (lng: string) => {
		i18n.changeLanguage(lng);
	};

	return (
		<ST.header>
			<Logo desciption={t("navbar.logo")} />
			<Category
				text={
					t("navbar.NavbarText", { returnObjects: true }) as {
						id: number;
						title: string;
					}[]
				}
			/>
			<Profile />
			<ButtonAtom
				type={ButtonEnum.enum_catalogButton}
				padding="5px 10px"
				onClick={() => handleLanguageChange("ru")}
			>
				RU
			</ButtonAtom>
			<ButtonAtom
				type={ButtonEnum.enum_catalogButton}
				padding="5px 10px"
				onClick={() => handleLanguageChange("de")}
			>
				DE
			</ButtonAtom>
		</ST.header>
	);
};

export default Navbar;
