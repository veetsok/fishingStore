import React from "react";
import { updateTotal } from "business.InterfaceLayer/store/shared/entities/todo.entity/redux/slice/CartSlice";
import ImageAtom from "user.InterfaceLayer/Libraries/UI_KIT/Atoms/Image.atom";
import ImageEnum from "user.InterfaceLayer/Libraries/UI_KIT/Atoms/Image.atom/enum";
import TextAtom from "user.InterfaceLayer/Libraries/UI_KIT/Atoms/Text.atom";
import TextEnum from "user.InterfaceLayer/Libraries/UI_KIT/Atoms/Text.atom/enum";
import Colors from "user.InterfaceLayer/constants/colors";

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
					<ST.count__svg>
						<svg
							onClick={() => {
								handleUpdateQuantityMinus();
								updateTotal();
							}}
							width="36"
							height="30"
							viewBox="0 0 36 30"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<ellipse
								cx="17.9945"
								cy="15"
								rx="17.5833"
								ry="15"
							/>
							<path
								d="M9.78888 14H26.2V16H9.78888V14Z"
								fill="white"
							/>
						</svg>
					</ST.count__svg>
					<ST.count__counter>{quantity}</ST.count__counter>
					<ST.count__svg>
						<svg
							onClick={() => {
								handleUpdateQuantityPlus();
								updateTotal();
							}}
							width="36"
							height="30"
							viewBox="0 0 36 30"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<ellipse
								cx="18.2559"
								cy="15"
								rx="17.5833"
								ry="15"
							/>
							<path
								d="M17.0837 14V8H19.4282V14H26.4615V16H19.4282V22H17.0837V16H10.0504V14H17.0837Z"
								fill="white"
							/>
						</svg>
					</ST.count__svg>
				</ST.count>
			</ST.list>

			<ST.remove>
				<svg
					onClick={handleRemoveItem}
					viewBox="0 0 40 41"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g style={{ clipPath: "url(#clip0_9_4588)" }}>
						<path
							style={{ fillRule: "evenodd", clipRule: "evenodd" }}
							d="M25.1707 27.0849C25.5612 27.4755 26.1943 27.4755 26.5849 27.0849C26.9754 26.6944 26.9754 26.0612 26.5849 25.6707L21.4142 20.5L26.5849 15.3293C26.9754 14.9388 26.9754 14.3056 26.5849 13.9151C26.1943 13.5245 25.5612 13.5245 25.1707 13.9151L19.9999 19.0858L14.8292 13.9151C14.4387 13.5245 13.8055 13.5245 13.415 13.9151C13.0245 14.3056 13.0245 14.9388 13.415 15.3293L18.5857 20.5L13.415 25.6707C13.0245 26.0612 13.0245 26.6944 13.415 27.0849C13.8055 27.4755 14.4387 27.4755 14.8292 27.0849L19.9999 21.9142L25.1707 27.0849Z"
						/>
					</g>
					<defs>
						<clipPath id="clip0_9_4588">
							<rect
								width="20"
								height="20"
								fill="white"
								transform="translate(5.85791 20.5) rotate(-45)"
							/>
						</clipPath>
					</defs>
				</svg>
			</ST.remove>
		</ST.block>
	);
};

export default CartItems;
