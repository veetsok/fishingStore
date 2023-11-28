import React from "react";
import { Link } from "react-router-dom";

import * as ST from "./styled/styled";
import { LogoProps } from "./type";
import TextAtom from "../../Atoms/Text.atom";
import TextEnum from "../../Atoms/Text.atom/enum";

const Logo: React.FC<LogoProps> = ({ desciption, color }) => {
	return (
		<Link to={"/"}>
			<ST.Logo>
				<TextAtom
					color={color}
					type={TextEnum.enum_Text_H4}
				>
					{desciption}
				</TextAtom>
			</ST.Logo>
		</Link>
	);
};

export default Logo;
