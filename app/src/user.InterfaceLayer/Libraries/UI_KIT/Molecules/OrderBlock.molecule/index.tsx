import React from "react";
import ImageAtom from "user.InterfaceLayer/Libraries/UI_KIT/Atoms/Image.atom";
import ImageEnum from "user.InterfaceLayer/Libraries/UI_KIT/Atoms/Image.atom/enum";

import * as ST from "./styled/styled";
import { OrderBlockProps } from "./type";

const OrderBlock: React.FC<OrderBlockProps> = (props) => {
	const { name, image, price, quantity } = props;

	return (
		<ST.orders>
			<ST.imagesBlock>
				<ImageAtom
					margin="0 10px 0 0"
					width="75px"
					height="60px"
					background={image}
					type={ImageEnum.enum_backgroundImage}
				/>
				<ST.name>{name}</ST.name>
			</ST.imagesBlock>
			<ST.quantity>{quantity} шт.</ST.quantity>
			<ST.price>{price}</ST.price>
		</ST.orders>
	);
};

export default OrderBlock;
