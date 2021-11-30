import React from "react";
import styled from "styled-components";

const Wrapper = styled.footer`
	font-size: 14px;
	background-color: #24252a;
	padding: 25px 30px;
`;

const Footer = () => {
	return <Wrapper>&copy; 2021 Bitek. All rights reserved.</Wrapper>;
};

export default Footer;
