import React from "react";
import styled from "styled-components";

const Wrapper = styled.main`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #32333a;
	color: #ffffff;
`;

const About = () => {
	return (
		<Wrapper>
			<h1>About</h1>
		</Wrapper>
	);
};

export default About;
