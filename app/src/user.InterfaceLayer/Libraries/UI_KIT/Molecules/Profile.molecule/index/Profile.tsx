import React from "react";
import { Link } from "react-router-dom";
import ImageAtom from "user.InterfaceLayer/Libraries/UI_KIT/Atoms/Image.atom";
import ImageEnum from "user.InterfaceLayer/Libraries/UI_KIT/Atoms/Image.atom/enum";
import { ReactComponent as CartLogo } from "user.InterfaceLayer/Libraries/assets/icons/Cart.svg";
import { ReactComponent as ProfileLogo } from "user.InterfaceLayer/Libraries/assets/icons/AccountLogo.svg";
import Colors from "user.InterfaceLayer/constants/colors";

const Profile = () => {
	return (
		<>
			<Link to="/cart">
				<ImageAtom
					fill={`${Colors.BLUE__PRIMARY}`}
					icon={<CartLogo />}
					type={ImageEnum.enum_defaultSvg}
				/>
			</Link>
			<Link to="/account">
				<ImageAtom
					fill={`${Colors.BLUE__PRIMARY}`}
					icon={<ProfileLogo />}
					type={ImageEnum.enum_defaultSvg}
				/>
			</Link>
		</>
	);
};

export default Profile;
