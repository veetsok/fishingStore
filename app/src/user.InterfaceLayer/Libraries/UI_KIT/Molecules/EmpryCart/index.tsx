import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Arrow } from "user.InterfaceLayer/Libraries/assets/icons/Arrow.svg";
import ImageAtom from "user.InterfaceLayer/Libraries/UI_KIT/Atoms/Image.atom";
import ImageEnum from "user.InterfaceLayer/Libraries/UI_KIT/Atoms/Image.atom/enum";
import Colors from "user.InterfaceLayer/constants/colors";

import { EmpryCartProps } from "./type";
import * as ST from "./styled/styled";
import TextAtom from "../../Atoms/Text.atom";
import TextEnum from "../../Atoms/Text.atom/enum";

const EmptyCart: React.FC<EmpryCartProps> = (props: EmpryCartProps) => {
	const { span, link } = props;

	return (
		<ST.container>
			<Link to={link}>
				<ImageAtom
					fill={`${Colors.BLUE__PRIMARY}`}
					type={ImageEnum.enum_defaultSvg}
					icon={<Arrow />}
				/>
				<TextAtom
					margin="0 0 0 20px"
					type={TextEnum.enum_Text_H5}
				>
					{span}
				</TextAtom>
			</Link>
		</ST.container>
	);
};

export default EmptyCart;
