import React, { lazy, Suspense } from "react";
import { RouteObject } from "react-router-dom";
import Error from "user.InterfaceLayer/Components/general.components/Error";
import Loader from "user.InterfaceLayer/Components/general.components/Loader";

import RoutesPaths from "./routesPaths";

const AppLayout = lazy(() => import("../Layouts/Main.layout"));
const CartPage = lazy(() => import("../Pages/Cart.page"));
const IdCardPage = lazy(() => import("../Pages/IdCard.page"));
const MainPage = lazy(() => import("../Pages/Main.page"));
const AccountPage = lazy(() => import("../Pages/Account.page"));
const CheckOutPage = lazy(() => import("../Pages/CheckOut.page"));

const mainRouter: RouteObject[] = [
	{
		path: RoutesPaths.MAIN,
		element: <AppLayout />,
		errorElement: <Error />,
		children: [
			{
				path: RoutesPaths.MAIN,
				index: true,
				element: (
					<Suspense fallback={<Loader />}>
						<MainPage />
					</Suspense>
				),
				errorElement: <Error />,
			},
			{
				path: RoutesPaths.ACCOUNT,
				index: true,
				element: (
					<Suspense fallback={<Loader />}>
						<AccountPage />
					</Suspense>
				),
				errorElement: <Error />,
			},
			{
				path: RoutesPaths.CHECK,
				index: true,
				element: (
					<Suspense fallback={<Loader />}>
						<CheckOutPage />
					</Suspense>
				),
				errorElement: <Error />,
			},
			{
				path: `${RoutesPaths.FISHING}:id`,
				element: (
					<Suspense fallback={<Loader />}>
						<IdCardPage />
					</Suspense>
				),
				errorElement: <Error />,
			},
			{
				path: RoutesPaths.CART,
				element: (
					<Suspense fallback={<Loader />}>
						<CartPage />
					</Suspense>
				),
				errorElement: <Error />,
			},
			{
				path: RoutesPaths.NOT_FOUND,
				element: <div>страницы нет</div>,
			},
		],
	},
];

export default mainRouter;
