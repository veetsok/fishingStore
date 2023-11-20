import React, { FC } from "react";
import CartComponent from "user.InterfaceLayer/Components/ui.components.bll/CartPage.component.bll";

import * as ST from "../../Libraries/constants/container/styled";

const LastPage: FC = () => (
	<>
		<ST.container>
			<CartComponent />
		</ST.container>
	</>
);

export default LastPage;
