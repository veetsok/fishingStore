import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "user.InterfaceLayer/Libraries/Widgets/Navbar.widget/index";
import Footer from "user.InterfaceLayer/Libraries/Widgets/Footer.widget/index";

import * as ST from "./styled/styled";

const MainLayout: React.FC = () => (
	<ST.PageContainer>
		<ST.NavContainer>
			<ST.Container>
				<ST.ResetContainer>
					<Navbar />
				</ST.ResetContainer>
			</ST.Container>
		</ST.NavContainer>

		<ST.MainContent>
			<ST.Container>
				<ST.ResetContainer>
					<Outlet />
				</ST.ResetContainer>
			</ST.Container>
		</ST.MainContent>

		<ST.FooterContainer>
			<ST.Container>
				<ST.ResetContainer>
					<Footer />
				</ST.ResetContainer>
			</ST.Container>
		</ST.FooterContainer>
	</ST.PageContainer>
);

export default MainLayout;
