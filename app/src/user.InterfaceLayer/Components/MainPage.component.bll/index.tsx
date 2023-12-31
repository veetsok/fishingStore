import React, { useState } from "react";
import CardList from "user.InterfaceLayer/Libraries/Widgets/CardList/index";
import { useGetAllFishingQuery } from "business.InterfaceLayer/store/shared/entities/todo.entity/redux/api";
import { addItem } from "business.InterfaceLayer/store/shared/entities/todo.entity/redux/slice/CartSlice";
import { useAppDispatch } from "business.InterfaceLayer/store/services/hooks/redux";
import { useTranslation } from "react-i18next";
import Text from "user.InterfaceLayer/Libraries/UI_KIT/Atoms/Text.atom";
import TextEnum from "user.InterfaceLayer/Libraries/UI_KIT/Atoms/Text.atom/enum";

import * as ST from "../styled";

const MainComponent: React.FC = () => {
	const { t } = useTranslation();
	const {
		data: products,
		error,
		isLoading,
	} = useGetAllFishingQuery({
		authToken: "",
		params: {
			name: "",
			image: "",
			price: 0,
			category: "",
			desciption: "",
			id: "",
		},
	});

	const catalogData = t("main.catalogData", { returnObjects: true });

	const dispatch = useAppDispatch();
	const handleAddToCart = (item: any) => {
		dispatch(addItem(item));
	};

	const [selectedCategory, setSelectedCategory] = useState("Все" || "Alle");

	const handleCategoryClick = (category: string) => {
		setSelectedCategory(category);
	};

	const filteredProducts =
		selectedCategory === "Все" || selectedCategory === "Alle"
			? products
			: products?.filter(
					(product: any) => product.category === selectedCategory
			  );

	return (
		<ST.container>
			<Text
				margin="0 0 40px 0"
				type={TextEnum.enum_Text_H1}
			>
				{t("catalog.title")}
			</Text>
			<CardList
				CatalogData={catalogData}
				error={error}
				isLoading={isLoading}
				handleAddToCart={handleAddToCart}
				handleCategoryClick={handleCategoryClick}
				filteredProducts={filteredProducts}
				selectedCategory={selectedCategory}
			/>
		</ST.container>
	);
};

export default MainComponent;
