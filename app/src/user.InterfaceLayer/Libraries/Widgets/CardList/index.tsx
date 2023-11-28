import React from "react";
import Catalog from "user.InterfaceLayer/Libraries/UI_KIT/Molecules/Catalog.molecule/index";

import * as ST from "./styled/styled";
import { CardListTestProps } from "./type";
import CardBlock from "./modules/CardBlock/index/index";

const CardList: React.FC<CardListTestProps> = React.memo(
	({
		error,
		isLoading,
		handleAddToCart,
		handleCategoryClick,
		filteredProducts,
		selectedCategory,
		CatalogData,
	}: CardListTestProps) => {
		return (
			<>
				<Catalog
					CatalogData={CatalogData}
					handleCategoryClick={handleCategoryClick}
					selectedCategory={selectedCategory}
				/>
				<ST.block>
					<CardBlock
						error={error}
						isLoading={isLoading}
						handleAddToCart={handleAddToCart}
						filteredProducts={filteredProducts}
					/>
				</ST.block>
			</>
		);
	}
);

CardList.displayName = "CardListTest";

export default CardList;
