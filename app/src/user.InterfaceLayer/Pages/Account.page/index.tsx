import React from "react";
import AccountComponent from "user.InterfaceLayer/Components/ui.components.bll/AccountPage.component.bll";

import * as ST from "../../Libraries/constants/container/styled";

const AccountPage: React.FC = () => {
	return (
		<>
			<ST.container>
				<AccountComponent />
			</ST.container>
		</>
	);
};

export default AccountPage;
