import React from "react";
import CheckOutComponent from "user.InterfaceLayer/Components/ui.components.bll/CheckOutPage.component.bll";

import * as ST from "../../Libraries/constants/container/styled";

const AccountPage: React.FC = () => {
	return (
		<>
			<ST.container>
				<CheckOutComponent />
			</ST.container>
		</>
	);
};

export default AccountPage;
