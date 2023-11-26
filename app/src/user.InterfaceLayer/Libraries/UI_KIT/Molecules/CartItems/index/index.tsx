import React from "react";
import { updateTotal } from "business.InterfaceLayer/store/shared/entities/todo.entity/redux/slice/CartSlice";
import ImageAtom from "user.InterfaceLayer/Libraries/UI_KIT/Atoms/Image.atom";
import ImageEnum from "user.InterfaceLayer/Libraries/UI_KIT/Atoms/Image.atom/enum";
import TextAtom from "user.InterfaceLayer/Libraries/UI_KIT/Atoms/Text.atom";
import TextEnum from "user.InterfaceLayer/Libraries/UI_KIT/Atoms/Text.atom/enum";
import Colors from "user.InterfaceLayer/constants/colors";
import { ReactComponent as Minus } from "user.InterfaceLayer/Libraries/assets/icons/Minus.svg";
import { ReactComponent as Plus } from "user.InterfaceLayer/Libraries/assets/icons/Plus.svg";
import { ReactComponent as Remove } from "user.InterfaceLayer/Libraries/assets/icons/Remove.svg";

import * as ST from "../styled/styled";

type Props = {
	id: number;
	image: string;
	price: number;
	name: string;
	handleRemoveItem: any;
	handleUpdateQuantityMinus: any;
	handleUpdateQuantityPlus: any;
	quantity: any;
};

const CartItems = ({
	name,
	image,
	price,
	handleRemoveItem,
	handleUpdateQuantityMinus,
	handleUpdateQuantityPlus,
	quantity,
}: Props) => {
	const totalPrice = price * quantity;

	return (
		<ST.block>
			<ImageAtom
				width="150px"
				height="150px"
				background={image}
				type={ImageEnum.enum_backgroundImage}
			/>
			<ST.list>
				<TextAtom
					color={`${Colors.TEXT__PRIMARY}`}
					type={TextEnum.enum_Text_H5}
				>
					{name}
				</TextAtom>
				<TextAtom
					margin="10px 0 0 0"
					color={`${Colors.CART__PRICE}`}
					type={TextEnum.enum_Text_H4}
				>
					{totalPrice} ₽
				</TextAtom>
				<ST.count>
					<ImageAtom
						cursor="pointer"
						width="36px"
						fill={`${Colors.BLUE__PRIMARY}`}
						onClick={() => {
							handleUpdateQuantityMinus();
							updateTotal();
						}}
						type={ImageEnum.enum_defaultSvg}
						icon={<Minus />}
					/>
					<TextAtom
						margin="0 10px"
						type={TextEnum.enum_Text_H5}
					>
						{quantity}
					</TextAtom>
					<ImageAtom
						cursor="pointer"
						width="36px"
						fill={`${Colors.BLUE__PRIMARY}`}
						onClick={() => {
							handleUpdateQuantityPlus();
							updateTotal();
						}}
						type={ImageEnum.enum_defaultSvg}
						icon={<Plus />}
					/>
				</ST.count>
			</ST.list>
			<ImageAtom
				cursor="pointer"
				top="10px"
				right="10px"
				position="absolute"
				width="40px"
				fill={`${Colors.BLUE__PRIMARY}`}
				onClick={handleRemoveItem}
				type={ImageEnum.enum_defaultSvg}
				icon={<Remove />}
			/>
		</ST.block>
	);
};

export default CartItems;
