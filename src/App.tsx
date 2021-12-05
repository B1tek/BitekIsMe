import React from "react";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import About from "./components/About";
import Projects from "./components/Projects";
import Info from "./components/Info";
import Contact from "./components/Contact";

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
		<BrowserRouter>
			<Global />
			<Header />
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/about" element={<About />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/info" element={<Info />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
};

export default App;
