import React, { lazy, Suspense } from "react";
import { Navigate, RouteObject } from "react-router-dom";

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
		element: (
			<Suspense fallback={<Loader />}>
				<MainLayout />
			</Suspense>
		),
		errorElement: <Error />,
		children: [
			{
				path: RoutesPaths.MAIN,
				element: (
					<Suspense fallback={<Loader />}>
						<MainPage />
					</Suspense>
				),
				errorElement: <Error />,
			},
			{
				path: RoutesPaths.ACCOUNT,
				element: (
					<Suspense fallback={<Loader />}>
						<AccountPage />
					</Suspense>
				),
				errorElement: <Error />,
			},
			{
				path: RoutesPaths.CHECK,
				element: (
					<Suspense fallback={<Loader />}>
						<CheckOutPage />
					</Suspense>
				),
				errorElement: <Error />,
			},
			{
				path: `${RoutesPaths.MAIN}:id`,
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
				path: "*",
				element: (
					<Suspense fallback={<Loader />}>
						<Navigate
							to="/"
							replace
						/>
					</Suspense>
				),
			},
		],
	},
];

export default mainRouter;
