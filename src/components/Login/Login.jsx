import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../Context/AuthContext/AuthContext';

const Login = () => {

	const { createSignIn } = use(AuthContext);

	const handleLogin = (e) => {
		e.preventDefault()
		const email = e.target.email.value;
		const password = e.target.password.value;

		createSignIn(email, password)
			.then(result => {
				console.log(result.user);

			})
			.catch(error => {
				console.log(error);

			})

	}
	return (
		<div className="card bg-base-100 w-full m-auto top-6 max-w-sm shrink-0 shadow-2xl">
			<div className="card-body">
				<h3 className="text-3xl font-bold">LogIn Here</h3>
				<form onSubmit={handleLogin}>
					<fieldset className="fieldset">
						{/* email field */}
						<label className="label">Email</label>
						<input type="email" className="input" name="email" placeholder="Email" />
						{/* Password Field */}
						<label className="label">Password</label>
						<input type="password" className="input" name="password" placeholder="Password" />
						<div><a className="link link-hover">Forgot password?</a></div>
						<button className="btn btn-neutral mt-4">LogIn</button>
					</fieldset>
				</form>
				<p>New To Our Website ? please <Link className='text-blue-600 underline' to="/register">Register</Link></p>
			</div>
		</div>
	);
};

export default Login;