import React from "react";
import { useTranslation } from "react-i18next";
import Text from "user.InterfaceLayer/Libraries/IvanKosteev.library/UI_KIT/Atoms/Text.atom";
import TextEnum from "user.InterfaceLayer/Libraries/IvanKosteev.library/UI_KIT/Atoms/Text.atom/enum";
import AccountBlock from "user.InterfaceLayer/Libraries/IvanKosteev.library/Widgets/AccountBlock/index";

const AccountComponent: React.FC = () => {
	const { t } = useTranslation();

	return (
		<>
			<Text type={TextEnum.enum_Text_H1}>{t("account.title")}</Text>
			<AccountBlock />
		</>
	);
};

export default AccountComponent;
