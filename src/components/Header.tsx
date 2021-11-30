import React from "react";
import styled from "styled-components";

const Wrapper = styled.header`
	background-color: #24252a;
	padding: 10px 80px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const Logo = styled.img`
	padding: 10px;
	border-radius: 25px;

	&:hover {
		transition: background-color 0.3s ease-in-out;
		background-color: #303138;
	}
`;

const A = styled.a`
	color: inherit;
`;

const NavBar = styled.nav``;

const Ul = styled.ul``;

const Li = styled.li`
	display: inline-block;
	margin: 0px 30px;
	font-size: 15px;

	&:hover {
		transition: color 0.3s ease-in-out;
		color: #0088a9;
	}
`;

const Button = styled.button`
	padding: 9px 30px;
	background-color: rgba(0, 136, 169, 1);
	color: white;
	border-radius: 50px;
	border: none;
	cursor: pointer;
	font-size: inherit;
	font-weight: inherit;
	transition: background-color 0.3s ease-in-out;

	&:hover {
		background-color: rgba(0, 136, 169, 0.6);
	}
`;

const Header = () => {
	return (
		<Wrapper>
			<A href="/">
				<Logo src="/logo.png" alt="logo" />
			</A>
			<NavBar>
				<Ul>
					<Li>
						<A href="/">About</A>
					</Li>
					<Li>
						<A href="/">Projects</A>
					</Li>
					<Li>
						<A href="/">Contact</A>
					</Li>
				</Ul>
			</NavBar>
			<A href="/">
				<Button>API Informatyka</Button>
			</A>
		</Wrapper>
	);
};

export default Header;
