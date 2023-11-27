import React, { ReactNode } from "react";

export enum CommonComponentsProps {
	value = "value",
	onClick = "onClick",
	placeholder = "placeholder",
	icon = "icon",
	children = "children",
	className = "className",
	checked = "checked",
	maxLength = "maxLength",
	max = "max",
	name = "name",
	isError = "isError",
	isLoading = "isLoading",
	onChange = "onChange",
	autoFocus = "autoFocus",
	required = "required",
	disabled = "disabled",
	background = "background",
	src = "src",
	alt = "alt",
	key = "key",
	color = "color",
	margin = "margin",
	align = "align",
	active = "active",
	padding = "padding",
	width = "width",
	height = "height",
	fill = "fill",
	cursor = "cursor",
	position = "position",
	top = "top",
	bottom = "bottom",
	border = "border",
	right = "right",
	left = "left",
	borderRadius = "borderRadius",
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
	[CommonComponentsProps.checked]?: boolean;
	[CommonComponentsProps.onChange]?: () => void;
	[CommonComponentsProps.autoFocus]?: boolean;
	[CommonComponentsProps.required]?: boolean;
	[CommonComponentsProps.disabled]?: boolean;
	[CommonComponentsProps.active]?: boolean;
	[CommonComponentsProps.background]?: string;
	[CommonComponentsProps.src]?: string;
	[CommonComponentsProps.alt]?: string;
	[CommonComponentsProps.key]?: number;
	[CommonComponentsProps.color]?: string;
	[CommonComponentsProps.margin]?: string;
	[CommonComponentsProps.padding]?: string;
	[CommonComponentsProps.align]?: string;
	[CommonComponentsProps.cursor]?: string;
	[CommonComponentsProps.position]?: string;
	[CommonComponentsProps.top]?: string;
	[CommonComponentsProps.bottom]?: string;
	[CommonComponentsProps.border]?: string;
	[CommonComponentsProps.right]?: string;
	[CommonComponentsProps.left]?: string;
	[CommonComponentsProps.width]?: string;
	[CommonComponentsProps.height]?: string;
	[CommonComponentsProps.borderRadius]?: string;
	[CommonComponentsProps.fill]?: string;
	[CommonComponentsProps.name]?: string;
}
