import React, { lazy, Suspense } from "react";
import { RouteObject } from "react-router-dom";

import RoutesPaths from "./routesPaths";

const Error = lazy(
	() => import("user.InterfaceLayer/Components/general.components/Error")
);

const Loader = lazy(
	() => import("user.InterfaceLayer/Components/general.components/Loader")
);

const MainLayout = lazy(
	() => import("user.InterfaceLayer/Layouts/Main.layout")
);

const CartPage = lazy(() => import("user.InterfaceLayer/Pages/Cart.page"));

const IdCardPage = lazy(() => import("user.InterfaceLayer/Pages/IdCard.page"));

const MainPage = lazy(() => import("user.InterfaceLayer/Pages/Main.page"));

const AccountPage = lazy(
	() => import("user.InterfaceLayer/Pages/Account.page")
);
const CheckOutPage = lazy(
	() => import("user.InterfaceLayer/Pages/CheckOut.page")
);

const mainRouter: RouteObject[] = [
	{
		path: RoutesPaths.MAIN,
		element: <MainLayout />,
		errorElement: <Error />,
		children: [
			{
				path: RoutesPaths.FISHING,
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
