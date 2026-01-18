import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import WelcomeMessage from "./components/WelcomeMessage";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import UserProfile from "./components/UserProfile";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div>
				<WelcomeMessage />
				<Header />
				<MainContent />
				<UserProfile
					name="Alice"
					age="25"
					bio="Loves hiking and photography"
				/>
				<Footer />
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
		</>
	);
}

export default App;
