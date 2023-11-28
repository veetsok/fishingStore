import React from "react";
import Text from "user.InterfaceLayer/Libraries/UI_KIT/Atoms/Text.atom";
import TextEnum from "user.InterfaceLayer/Libraries/UI_KIT/Atoms/Text.atom/enum";
import Colors from "user.InterfaceLayer/constants/colors";

import { FormProps } from "./type";
import * as ST from "./styled/styled";
import Input from "../../Atoms/Input.atom";
import { InputTypeEnum } from "../../Atoms/Input.atom/enum";

const Form: React.FC<FormProps> = () => {
	return (
		<>
			<Text
				margin="0 0 30px 0"
				type={TextEnum.enum_Text_H2}
			>
				Личные данные
			</Text>
			<form action="">
				<ST.block>
					<Input
						color={`${Colors.TEXT__PRIMARY}`}
						width="298px"
						borderRadius="5px"
						padding="15px 25px"
						border={`2px solid ${Colors.INPUT}`}
						placeholder="Имя"
						type={InputTypeEnum.TEXT}
					/>
					<ST.Reddit>Изменить</ST.Reddit>
				</ST.block>
				<ST.block>
					<Input
						color={`${Colors.TEXT__PRIMARY}`}
						width="298px"
						borderRadius="5px"
						padding="15px 25px"
						border={`2px solid ${Colors.INPUT}`}
						placeholder="Фамилия"
						type={InputTypeEnum.TEXT}
					/>
					<ST.Reddit>Изменить</ST.Reddit>
				</ST.block>
				<ST.block>
					<Input
						color={`${Colors.TEXT__PRIMARY}`}
						width="298px"
						borderRadius="5px"
						padding="15px 25px"
						border={`2px solid ${Colors.INPUT}`}
						placeholder="Электронная почта"
						type={InputTypeEnum.EMAIL}
					/>
					<ST.Reddit>Изменить</ST.Reddit>
				</ST.block>
				<ST.block>
					<Input
						color={`${Colors.TEXT__PRIMARY}`}
						width="298px"
						borderRadius="5px"
						padding="15px 25px"
						border={`2px solid ${Colors.INPUT}`}
						placeholder="Пароль"
						type={InputTypeEnum.EMAIL}
					/>
					<ST.Reddit>Изменить</ST.Reddit>
				</ST.block>
			</form>
		</>
	);
};

export default Form;
