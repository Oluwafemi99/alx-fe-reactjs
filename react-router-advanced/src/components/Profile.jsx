import { Link, Routes, Route } from "react-router-dom";
import ProfileSettings from "../pages/ProfileSettings";
import ProfileDetails from "../pages/ProfileDetails";

function Profile() {
	return (
		<div>
			<h1>Profile Page</h1>

			<nav>
				<Link to="details">Profile Details</Link> |{" "}
				<Link to="settings">Profile Settings</Link>
			</nav>

			{/* Nested Routes defined here */}
			<Routes>
				<Route
					path="details"
					element={<ProfileDetails />}
				/>
				<Route
					path="settings"
					element={<ProfileSettings />}
				/>
			</Routes>
		</div>
	);
}

export default Profile;
