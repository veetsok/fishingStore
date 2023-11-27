import { ICommonComponentProps } from "user.InterfaceLayer/constants/commonComponentProps";

export interface CheckOutWidgetProps {
	delivery: any;
	payment: any;
	onClick: ICommonComponentProps["onClick"];
	selectedPayment: any;
	selectedDelivery: any;
	handleSelectPayment: any;
	handleSelectDelivery: any;
	textButton: any;
	textTitle: any;
	textQuantity: any;
	textTotal: any;
	textPaymentTitle: any;
	textDeliveryTitle: any;
}
