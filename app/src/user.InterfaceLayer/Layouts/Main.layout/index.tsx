import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "user.InterfaceLayer/Libraries/Widgets/Footer/index";
import Navbar from "user.InterfaceLayer/Libraries/Widgets/Navbar/index/Navbar";

import * as ST from "./styled";

const App: React.FC = () => (
	<ST.PageContainer>
		<ST.NavContainer>
			<Navbar />
		</ST.NavContainer>
		<ST.MainContent>
			<Outlet />
		</ST.MainContent>
		<ST.FooterContainer>
			<Footer />
		</ST.FooterContainer>
	</ST.PageContainer>
);

export default App;
