import React from "react";
import { createGlobalStyle } from "styled-components";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

const Global = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap");
    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
	body {
		font-family: "Montserrat", sans-serif;
        font-size: 14px;
		color: white;
		font-weight: 600;
		width: 100%;
		height: 100%;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}
`;

const App = () => {
	return (
		<>
			<Global />
			<Header />
			<Main />
			<Footer />
		</>
	);
};

export default App;
