import React from "react";
import Footer from "user.InterfaceLayer/Libraries/Widgets/Footer/index";
import Navbar from "user.InterfaceLayer/Libraries/Widgets/Navbar/index/Navbar";
import CheckOutComponent from "user.InterfaceLayer/Components/CheckOutPage.component.bll";
import * as ST from "user.InterfaceLayer/Libraries/constants/container/styled";

const AccountPage: React.FC = () => {
	return (
		<>
			<ST.container>
				<Navbar />
				<ST.block>
					<CheckOutComponent />
				</ST.block>
			</ST.container>
			<ST.footer>
				<Footer />
			</ST.footer>
		</>
	);
};

export default AccountPage;
