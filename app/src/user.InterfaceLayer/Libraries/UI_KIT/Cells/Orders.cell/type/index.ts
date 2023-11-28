export interface order {
	id: string;
	items: CartItem[];
	total: number;
	deliveryMethod: string;
	paymentMethod: string;
}

export interface CartItem {
	id: string;
	quantity: number;
	name: string;
	price: number;
	image: string;
}

export interface OrdersProps {
	orders: order[];
	handleClearOrder: any;
}
