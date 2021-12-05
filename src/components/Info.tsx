import React from "react";
import styled from "styled-components";

const Wrapper = styled.main`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: center;
	background-image: linear-gradient(60deg, #9b2440, #9e6b1f);
	color: #1e2027;
`;

const Info = () => {
	return (
		<Wrapper>
			<h1>Info</h1>
		</Wrapper>
	);
};

export default Info;
