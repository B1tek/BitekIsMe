import React from "react";
import styled from "styled-components";

const Wrapper = styled.main`
	background-color: #2b2c31;
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Main = () => {
	return (
		<Wrapper>
			<h1>BitekIsMe</h1>
		</Wrapper>
	);
};

export default Main;
