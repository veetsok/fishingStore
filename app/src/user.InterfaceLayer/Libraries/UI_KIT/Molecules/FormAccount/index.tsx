import React from "react";
import Text from "user.InterfaceLayer/Libraries/UI_KIT/Atoms/Text.atom";
import TextEnum from "user.InterfaceLayer/Libraries/UI_KIT/Atoms/Text.atom/enum";

import SelectInput from "../../Atoms/SelectInput/index/index";
import { FormProps } from "./type";

const Form: React.FC<FormProps> = ({ userData }: FormProps) => {
	return (
		<>
			<Text type={TextEnum.enum_Text_H2}>Личные данные</Text>
			<form action="">
				{userData.map((e: any) => (
					<SelectInput
						key={e.id}
						placeholder={e.placeholder}
					/>
				))}
			</form>
		</>
	);
};

export default Form;
