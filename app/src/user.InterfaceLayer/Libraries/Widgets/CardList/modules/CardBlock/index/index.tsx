import React from "react";
import Card from "user.InterfaceLayer/Libraries/UI_KIT/Cells/Card.cell/index";

import { CardBlockProps } from "../type";

const CardBlock: React.FC<CardBlockProps> = ({
	filteredProducts,
	error,
	isLoading,
	handleAddToCart,
}: CardBlockProps) => {
	return (
		<>
			{isLoading ? (
				<p>Loading.....</p>
			) : error ? (
				<p>Ошибка загрузки с сервера</p>
			) : (
				<>
					{filteredProducts?.map((product: any) => (
						<Card
							key={product.id}
							name={product.name}
							image={product.image}
							price={product.price}
							onClick={() => handleAddToCart(product)}
						/>
					))}
				</>
			)}
		</>
	);
};

export default CardBlock;
