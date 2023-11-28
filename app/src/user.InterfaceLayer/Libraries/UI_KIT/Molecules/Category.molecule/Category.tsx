import React from "react";

import * as ST from "./styled/styled";
import { CategoryProps } from "./type";

const Category = (props: CategoryProps) => {
	const { text } = props;

	return <ST.a>{text && text.map((e) => <a key={e.id}>{e.title}</a>)}</ST.a>;
};

export default Category;
