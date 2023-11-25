import React from "react";
import { Link } from "react-router-dom";
import ImageAtom from "user.InterfaceLayer/Libraries/UI_KIT/Atoms/Image.atom";
import ImageEnum from "user.InterfaceLayer/Libraries/UI_KIT/Atoms/Image.atom/enum";
import { ReactComponent as CartLogo } from "user.InterfaceLayer/Libraries/assets/icons/Cart.svg";

import * as ST from "../styled/styled";

const Profile = () => {
	return (
		<div>
			<Link to="/cart">
				<ImageAtom
					icon={<CartLogo />}
					type={ImageEnum.enum_defaultSvg}
				/>
			</Link>
			<Link to="/account">
				<ST.profile
					xmlns="http://www.w3.org/2000/svg"
					width="40"
					height="40"
					viewBox="0 0 40 40"
					fill="none"
				>
					<path
						style={{ fillRule: "evenodd", clipRule: "evenodd" }}
						d="M33.5656 30.0386C35.6452 27.2333 36.875 23.7603 36.875 20C36.875 10.6801 29.3197 3.125 20 3.125C10.6801 3.125 3.125 10.6801 3.125 20C3.125 29.3197 10.6801 36.875 20 36.875C24.8897 36.875 29.2935 34.7954 32.3757 31.4723C32.7983 31.0165 33.1955 30.5379 33.5656 30.0386ZM32.63 28.4375C34.2453 26.0242 35.1874 23.1221 35.1874 20C35.1874 11.6122 28.3878 4.81246 19.9998 4.81246C11.6122 4.81246 4.81246 11.6122 4.81246 20C4.81246 23.1222 5.7545 26.0242 7.37002 28.4375C9.40812 25.3927 12.5181 23.126 16.1601 22.1772C14.4016 20.9586 13.25 18.9264 13.25 16.6249C13.25 12.897 16.2721 9.87486 20 9.87486C23.7279 9.87486 26.75 12.897 26.75 16.6249C26.75 18.9262 25.5982 20.9586 23.8399 22.177C27.4818 23.126 30.5919 25.3925 32.63 28.4375ZM31.543 29.8705C29.1747 25.9761 24.8913 23.3749 20.0002 23.3749C15.1089 23.3749 10.8253 25.9761 8.457 29.8707C11.2425 33.125 15.3803 35.1875 20 35.1875C24.6197 35.1875 28.7575 33.1249 31.543 29.8705ZM20 21.6875C22.796 21.6875 25.0626 19.4211 25.0626 16.6249C25.0626 13.8289 22.7962 11.5623 20 11.5623C17.2038 11.5623 14.9374 13.8291 14.9374 16.6251C14.9374 19.4211 17.204 21.6875 20 21.6875Z"
						fill="#164793"
					/>
				</ST.profile>
			</Link>
		</div>
	);
};

export default Profile;
