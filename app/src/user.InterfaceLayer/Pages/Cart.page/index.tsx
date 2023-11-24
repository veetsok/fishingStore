import React, { FC } from "react";
import Footer from "user.InterfaceLayer/Libraries/Widgets/Footer/index";
import Navbar from "user.InterfaceLayer/Libraries/Widgets/Navbar/index/Navbar";
import CartComponent from "user.InterfaceLayer/Components/CartPage.component.bll";
import * as ST from "user.InterfaceLayer/Libraries/constants/container/styled";

const LastPage: FC = () => (
	<>
		<ST.container>
			<Navbar />
			<CartComponent />
		</ST.container>
		<ST.footer>
			<Footer />
		</ST.footer>
	</>
);

export default LastPage;
