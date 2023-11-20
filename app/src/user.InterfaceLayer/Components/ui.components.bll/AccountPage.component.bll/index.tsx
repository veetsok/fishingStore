import React from "react";
import { useTranslation } from "react-i18next";
import Title from "user.InterfaceLayer/Libraries/UI_KIT/Atoms/Title/index";
import AccountBlock from "user.InterfaceLayer/Libraries/Widgets/AccountBlock/index";

const AccountComponent: React.FC = () => {
	const { t } = useTranslation();

	return (
		<>
			<Title title={t("account.title")} />
			<AccountBlock />
		</>
	);
};

export default AccountComponent;
