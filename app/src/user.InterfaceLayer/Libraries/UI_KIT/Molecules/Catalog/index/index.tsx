import React from "react";
import Button from "user.InterfaceLayer/Libraries/UI_KIT/Atoms/Button.atom";
import ButtonEnum from "user.InterfaceLayer/Libraries/UI_KIT/Atoms/Button.atom/enum";

import { CatalogProps } from "../type";

const Catalog: React.FC<CatalogProps> = ({
	handleCategoryClick,
	selectedCategory,
	CatalogData,
}: CatalogProps) => {
	return (
		<>
			{CatalogData.map((e: any) => (
				<Button
					type={ButtonEnum.enum_catalogButton}
					key={e.id}
					margin="0 5px 0 0"
					padding="15px 25px"
					onClick={() => handleCategoryClick(e.title)}
					active={selectedCategory === e.title}
				>
					{e.title}
				</Button>
			))}
		</>
	);
};

export default React.memo(Catalog);
