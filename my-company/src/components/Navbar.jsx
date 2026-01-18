import { Link } from "react-router-dom";
import React from "react";

function Navbar() {
	return (
		<nav>
			<Link
				to={"/"}
				style={{
					padding: "10px",
					border: "1px solid gray",
					margin: "10px",
					backgroundColor: "#333",
				}}
			>
				Home
			</Link>
			<Link
				to={"/about"}
				style={{
					padding: "10px",
					border: "1px solid gray",
					margin: "10px",
					backgroundColor: "#333",
				}}
			>
				About
			</Link>
			<Link
				to={"/contact"}
				style={{
					padding: "10px",
					border: "1px solid gray",
					margin: "10px",
					backgroundColor: "#333",
				}}
			>
				Contact
			</Link>
			<Link
				to={"/services"}
				style={{
					padding: "10px",
					border: "1px solid gray",
					margin: "10px",
					backgroundColor: "#333",
				}}
			>
				Services
			</Link>
		</nav>
	);
}

export default Navbar;
