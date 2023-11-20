import React from "react";
import Footer from "user.InterfaceLayer/Libraries/Widgets/Footer/index";
import Navbar from "user.InterfaceLayer/Libraries/Widgets/Navbar/index/Navbar";
import AccountComponent from "user.InterfaceLayer/Components/ui.components.bll/AccountPage.component.bll";

import * as ST from "../../Libraries/constants/container/styled";

const AccountPage: React.FC = () => {
	return (
		<>
			<ST.container>
				<Navbar />
				<ST.block>
					<AccountComponent />
				</ST.block>
			</ST.container>
			<ST.footer>
				<Footer />
			</ST.footer>
		</>
	);
};

export default AccountPage;
