import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./components/Profile";
import ProfileDetails from "./pages/ProfileDetails";
import ProfileSettings from "./pages/ProfileSettings";
import BlogPost from "./pages/BlogPost";
import ProtectedRoute from "./components/ProtectedRoute";
import { useState } from "react";

function App() {
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	const handleLogin = () => setIsAuthenticated(true);

	return (
		<Router>
			<nav>
				<Link to="/">Home</Link> | <Link to="/profile">Profile</Link> |{" "}
				<Link to="/blog/123">Blog Post 123</Link>
			</nav>

			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>

				<Route
					path="/login"
					element={<Login onLogin={handleLogin} />}
				/>

				{/* Protected nested route */}
				<Route
					path="/profile"
					element={
						<ProtectedRoute isAuthenticated={isAuthenticated}>
							<Profile />
						</ProtectedRoute>
					}
				>
					<Route
						path="details"
						element={<ProfileDetails />}
					/>
					<Route
						path="settings"
						element={<ProfileSettings />}
					/>
				</Route>

				{/* Dynamic route */}
				<Route
					path="/blog/:id"
					element={<BlogPost />}
				/>

				{/* Fallback */}
				<Route
					path="*"
					element={<h1>404 Not Found</h1>}
				/>
			</Routes>
		</Router>
	);
}

export default App;
