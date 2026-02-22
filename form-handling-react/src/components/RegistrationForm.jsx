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
		const { username, email, password } = formData; // destructure for validation

		if (!username.trim()) newErrors.username = "Username is required";
		if (!email.trim()) newErrors.email = "Email is required";
		if (!password.trim()) newErrors.password = "Password is required";

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

	const { username, email, password } = formData; // destructure for JSX

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
