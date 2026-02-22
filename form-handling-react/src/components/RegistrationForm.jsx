import { useState } from "react";

function RegistrationForm() {
	const [formData, setFormData] = useState({
		username: "",
		email: "",
		password: "",
	});

	const [errors, setErrors] = useState({});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const validate = () => {
		const newErrors = {};

		// Destructure form data for validation
		const { username, email, password } = formData;

		// Explicit individual checks
		if (!username) {
			newErrors.username = "Username is required";
		}

		if (!email) {
			newErrors.email = "Email is required";
		}

		if (!password) {
			newErrors.password = "Password is required";
		}

		return newErrors;
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const validationErrors = validate();

		if (Object.keys(validationErrors).length > 0) {
			setErrors(validationErrors);
		} else {
			setErrors({});
			console.log("Form Submitted:", formData);
			alert("Registration Successful!");
		}
	};

	// Destructure for JSX binding
	const { username, email, password } = formData;

	return (
		<form onSubmit={handleSubmit}>
			<h2>User Registration</h2>

			<div>
				<label>Username:</label>
				<input
					type="text"
					name="username"
					value={username}
					onChange={handleChange}
				/>
				{errors.username && <p style={{ color: "red" }}>{errors.username}</p>}
			</div>

			<div>
				<label>Email:</label>
				<input
					type="email"
					name="email"
					value={email}
					onChange={handleChange}
				/>
				{errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
			</div>

			<div>
				<label>Password:</label>
				<input
					type="password"
					name="password"
					value={password}
					onChange={handleChange}
				/>
				{errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
			</div>

			<button type="submit">Register</button>
		</form>
	);
}

export default RegistrationForm;
