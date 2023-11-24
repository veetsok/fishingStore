import React from "react";

import * as ST from "./styled/styled";
import TextEnum from "./enum";
import { ITextPropsDefault } from "./mock";
import { TextType } from "./type";

const Text: React.FC<TextType> = (props: TextType) => {
	const { children, type, isLoading, margin, align, color } = props;
	switch (type) {
		case TextEnum.enum_Text_H1: {
			return (
				<ST.H1
					isLoading={isLoading}
					color={color}
					margin={margin}
					align={align}
				>
					{children}
				</ST.H1>
			);
		}
		case TextEnum.enum_Text_H2: {
			return (
				<ST.H2
					color={color}
					margin={margin}
					align={align}
					isLoading={isLoading}
				>
					{children}
				</ST.H2>
			);
		}
		case TextEnum.enum_Text_H3: {
			return (
				<ST.H3
					color={color}
					margin={margin}
					align={align}
					isLoading={isLoading}
				>
					{children}
				</ST.H3>
			);
		}
		case TextEnum.enum_Text_H4: {
			return (
				<ST.H4
					color={color}
					margin={margin}
					align={align}
					isLoading={isLoading}
				>
					{children}
				</ST.H4>
			);
		}
		case TextEnum.enum_Text_H5: {
			return (
				<ST.H5
					color={color}
					margin={margin}
					align={align}
					isLoading={isLoading}
				>
					{children}
				</ST.H5>
			);
		}
		case TextEnum.enum_Text_H6: {
			return (
				<ST.H6
					color={color}
					margin={margin}
					align={align}
					isLoading={isLoading}
				>
					{children}
				</ST.H6>
			);
		}
		default: {
			return <ST.Text>Ошибка</ST.Text>;
		}
	}
};

Text.defaultProps = ITextPropsDefault;
export default React.memo(Text);
