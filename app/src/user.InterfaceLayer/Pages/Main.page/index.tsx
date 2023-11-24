import React from "react";
import MainComponent from "user.InterfaceLayer/Components/MainPage.component.bll";
import i18n from "user.InterfaceLayer/Components/I18next/i18n";
import { I18nextProvider } from "react-i18next";
// import { useParams } from "react-router-dom";

// interface MainPageProps {
// 	id: string;
// }

const MainPage: React.FC = () => {
	// const { id } = useParams();

	return (
		<I18nextProvider i18n={i18n}>
			<>
				<MainComponent
				// id={id || ""}
				/>
			</>
		</I18nextProvider>
	);
};

export default MainPage;
