// import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { use } from 'react';
import { Link } from 'react-router';
// import { auth } from '../../Firebase/firebase.init';
import { AuthContext } from '../../Context/AuthContext/AuthContext';

const Register = () => {

	const { createUser } = use(AuthContext);




	const handleRegister = (e) => {
		e.preventDefault();
		const email = e.target.email.value;
		const password = e.target.password.value;
		createUser(email, password)

			.then(result => {
				console.log(result.user);

			})
			.catch(error => {
				console.log(error);

			})

	}

	// const handleRegister = (e) => {
	// 	e.preventDefault();
	// 	const email = e.target.email.value;
	// 	const password = e.target.password.value;
	// 	console.log(email, password);

	// 	createUserWithEmailAndPassword(auth, email, password)
	// 		.then(result => {
	// 			console.log(result.user);

	// 		})
	// 		.catch(error => {
	// 			console.log(error);

	// 		})


	// }
	return (
		<div className="card bg-base-100 w-full m-auto top-6 max-w-sm shrink-0 shadow-2xl">
			<div className="card-body">
				<h3 className="text-3xl font-bold">Please Register</h3>
				<form onSubmit={handleRegister}>
					<fieldset className="fieldset">
						{/* name field */}
						<label className="label">Name</label>
						<input type="name" className="input" name="name" placeholder="name" />
						{/* email field */}
						<label className="label">Email</label>
						<input type="email" className="input" name="email" placeholder="Email" />
						{/* Password Field */}
						<label className="label">Password</label>
						<input type="password" className="input" name="password" placeholder="Password" />
						<button className="btn btn-neutral mt-4">Register</button>
					</fieldset>
				</form>
				<p>Already Have an Account ? please <Link className='text-blue-600 underline' to="/login">LogIn</Link></p>
			</div>
		</div>
	);
};

export default Register;