import React from "react";
import MainComponent from "user.InterfaceLayer/Components/ui.components.bll/MainPage.component.bll";
import i18n from "user.InterfaceLayer/Components/ui.components.bll/I18next/i18n";
import { I18nextProvider } from "react-i18next";

// import { useParams } from "react-router-dom";

import * as ST from "./styled";

// interface MainPageProps {
// 	id: string;
// }

const MainPage: React.FC = () => {
	// const { id } = useParams();

	return (
		<I18nextProvider i18n={i18n}>
			<>
				<ST.container>
					<MainComponent
					// id={id || ""}
					/>
				</ST.container>
			</>
		</I18nextProvider>
	);
};

export default MainPage;
