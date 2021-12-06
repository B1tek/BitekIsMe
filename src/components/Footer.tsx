import React from "react";
import styled from "styled-components";

const Wrapper = styled.footer`
	font-size: 14px;
	background-color: #24252a;
	padding: 15px 30px;
	display: flex;
	justify-content: flex-end;
	align-items: center;
`;

const Copyright = styled.footer`
	margin-right: auto;
`;

const A = styled.a`
	color: inherit;
`;

const Button = styled.button`
	padding: 5px 15px;
	background-color: #24252a;
	color: white;
	border-radius: 10px;
	border: 2px solid #32333a;
	cursor: pointer;
	font-size: inherit;
	font-weight: inherit;
	transition: background-color 0.3s ease-in-out;

	&:hover {
		background-color: #32333a;
	}
`;

const NavBar = styled.nav``;

const Ul = styled.ul``;

const Li = styled.li`
	display: inline-block;
	margin: 0px 10px;
	font-size: 13px;
	transition: color 0.3s ease-in-out;

	&:hover {
		color: #0088a9;
	}
`;

const Footer = () => {
	return (
		<Wrapper>
			<Copyright>&copy; 2021 Bitek. All rights reserved.</Copyright>
			<NavBar>
				<Ul>
					<Li>
						<A href="https://github.com/B1tek" target="_blank">
							<Button>GitHub</Button>
						</A>
					</Li>
					<Li>
						<A href="https://discord.com/users/529643065124585512" target="_blank">
							<Button>Discord</Button>
						</A>
					</Li>
					<Li>
						<A href="https://www.instagram.com/szymiko_/" target="_blank">
							<Button>Instagram</Button>
						</A>
					</Li>
				</Ul>
			</NavBar>
		</Wrapper>
	);
};

export default Footer;
