import React from "react";
import AccountComponent from "user.InterfaceLayer/Components/AccountPage.component.bll";
import Footer from "user.InterfaceLayer/Libraries/Widgets/Footer/index";
import Navbar from "user.InterfaceLayer/Libraries/Widgets/Navbar/index/Navbar";
import * as ST from "user.InterfaceLayer/Libraries/constants/container/styled";

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
