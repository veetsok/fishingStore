import React, { ReactNode } from "react";

export enum CommonComponentsProps {
	value = "value",
	onClick = "onClick",
	placeholder = "placeholder",
	icon = "icon",
	children = "children",
	className = "className",
	maxLength = "maxLength",
	max = "max",
	isError = "isError",
	isLoading = "isLoading",
	onChange = "onChange",
	autoFocus = "autoFocus",
	required = "required",
	disabled = "disabled",
	background = "background",
	src = "src",
	key = "key",
	color = "color",
	margin = "margin",
	align = "align",
	active = "active",
}

export interface ICommonComponentProps {
	[CommonComponentsProps.value]?: string | number | undefined;
	[CommonComponentsProps.onClick]?: () => void;
	[CommonComponentsProps.placeholder]?: string;
	[CommonComponentsProps.icon]?: JSX.Element | React.ReactNode;
	[CommonComponentsProps.children]?: JSX.Element | ReactNode;
	[CommonComponentsProps.className]?: string;
	[CommonComponentsProps.maxLength]?: number;
	[CommonComponentsProps.max]?: number;
	[CommonComponentsProps.isError]?: boolean;
	[CommonComponentsProps.isLoading]?: boolean;
	[CommonComponentsProps.onChange]?: () => void;
	[CommonComponentsProps.autoFocus]?: boolean;
	[CommonComponentsProps.required]?: boolean;
	[CommonComponentsProps.disabled]?: boolean;
	[CommonComponentsProps.active]?: boolean;
	[CommonComponentsProps.background]?: string;
	[CommonComponentsProps.src]?: string;
	[CommonComponentsProps.key]?: number;
	[CommonComponentsProps.color]?: string;
	[CommonComponentsProps.margin]?: string;
	[CommonComponentsProps.align]?: string;
}
