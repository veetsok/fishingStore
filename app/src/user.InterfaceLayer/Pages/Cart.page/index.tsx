import React, { FC } from "react";
import Footer from "user.InterfaceLayer/Libraries/Widgets/Footer/index";
import Navbar from "user.InterfaceLayer/Libraries/Widgets/Navbar/index/Navbar";
import CartComponent from "user.InterfaceLayer/Components/ui.components.bll/CartPage.component.bll";

import * as ST from "../../Libraries/constants/container/styled";

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
