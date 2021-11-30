import React from "react";
import styled from "styled-components";

const Wrapper = styled.header`
	background-color: #24252a;
	padding: 10px 80px;
	display: flex;
	align-items: center;
	justify-content: end;
`;

const Logo = styled.img`
	padding: 10px;
	border-radius: 25px;

	&:hover {
		background-color: #303138;
	}
`;

const A = styled.a`
	margin-right: auto;
`;

const NavBar = styled.nav``;

const Ul = styled.ul``;

const Li = styled.li`
	display: inline-block;
`;

const Button = styled.button`
	padding: 9px 30px;
	margin: 0 15px;
	background-color: #474747;
	color: white;
	border-radius: 50px;
	border: none;
	cursor: pointer;

	&:hover {
		background-color: #363636;
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
						<A href="/">
							<Button>About</Button>
						</A>
					</Li>
					<Li>
						<A href="/">
							<Button>Projects</Button>
						</A>
					</Li>
					<Li>
						<A href="/">
							<Button>Contact</Button>
						</A>
					</Li>
				</Ul>
			</NavBar>
		</Wrapper>
	);
};

export default Header;
