import styled from "styled-components";

export const total = styled.div`
	display: inline-flex;
	flex-direction: column;
	align-items: flex-start;
	& a {
		width: 100%;
	}
`;

export const totalBlock = styled.div`
	display: flex;
	width: 299px;
	padding: 20px;
	flex-direction: column;
	align-items: flex-start;
	gap: 29px;
	border-radius: 10px 10px 0px 0px;
	background: #fff;
`;

export const block = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	align-self: stretch;
`;