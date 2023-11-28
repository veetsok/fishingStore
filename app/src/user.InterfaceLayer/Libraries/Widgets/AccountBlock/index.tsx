import React, { useState } from "react";
import Form from "user.InterfaceLayer/Libraries/UI_KIT/Cells/FormAccount.cell/index";
import Orders from "user.InterfaceLayer/Libraries/UI_KIT/Cells/Orders.cell/index";

import Catalog from "../../UI_KIT/Molecules/Catalog.molecule/index";
import { UserData, orderData } from "./const/index";
import * as ST from "./styled/styled";

const AccountBlock: React.FC = () => {
	const [selected, setSelected] = useState("Мои заказы");
	const handleSelect = (title: string) => {
		setSelected(title);
	};

	return (
		<ST.container>
			<ST.select>
				<Catalog
					selectedCategory={selected}
					handleCategoryClick={handleSelect}
					CatalogData={orderData}
				/>
			</ST.select>
			<ST.form>
				{selected === "Личные данные" && <Form userData={UserData} />}
				{selected === "Мои заказы" && <Orders />}
			</ST.form>
		</ST.container>
	);
};

export default AccountBlock;

{
	/* <AccountBlockProps> */
}

// {}: AccountBlockProps
